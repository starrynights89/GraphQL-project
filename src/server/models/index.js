import { Sequelize } from 'sequelize';

// eslint-disable-next-line import/no-extraneous-dependencies
// TODO: comment out when in production
if (process.env.NODE_ENV !== 'production') {
  require('babel-plugin-require-context-hook/register')();
}

export default (sequelize) => {
  let db = {};

  const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/,
    'sync');
  context.keys().map(context).forEach((module) => {
    const model = module(sequelize, Sequelize);
    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};
