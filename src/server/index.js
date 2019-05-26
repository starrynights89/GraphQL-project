// Express.js server

import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import services from './services';

// Setup root of project
const root = path.join(__dirname, '../../');
const app = express();

// If the node environment is in development
// utitilize helmet, contentSecurity, compress, and cors
// to secure Express.js
if (process.env.NODE_ENV === 'development') {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", 'data:', '*.amazonaws.com'],
    },
  }));
  app.use(compress());
  app.use(cors());
}

// Only send Refer header for pages of the same origin
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
// Serve static files dist/client
app.use('/', express.static(path.join(root, 'dist/client')));
// Serve avater images under uploads
app.use('/uploads', express.static(path.join(root, 'uploads')));

// Bind GraphQL to the Express.js web server
const serviceNames = Object.keys(services);
for (let i = 0; i < serviceNames.length; i += 1) {
  const name = serviceNames[i];
  if (name === 'graphql') {
    services[name].applyMiddleware({ app });
  } else {
    app.use(`/${name}`, services[name]);
  }
}

// Set initial path and catch any request
// Transfer the file at the given path
app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});
app.listen(8000, () => console.log('Listening on port 8000!'));
