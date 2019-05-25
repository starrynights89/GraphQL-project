import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';

const app = express();

// Setup root of project
const root = path.join(__dirname, '../../');

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
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// Serve static files dist/client
app.use('/', express.static(path.join(root, 'dist/client')));
// Serve avater images under uploads
app.use('/uploads', express.static(path.join(root, 'uploads')));
// Set initial path and catch any request
// Transfer the file at the given path
app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});
app.listen(8000, () => console.log('Listening on port 8000!'));
