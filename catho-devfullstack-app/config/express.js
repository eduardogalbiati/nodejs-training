const express     = require('express');
const bodyParser  = require('body-parser');
const config      = require('config');
// const consign     = require('consign');

module.exports = () => {
  const app = express();

  // Setting application vars
  app.set('port', process.env.PORT || config.get('server.port'));

  // Setting middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Importing endpoints with consign
  /* consign({cwd: 'api'})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app); */

  // Importing endpoints
  require('../api/routes/employers.routes')(app);

  return app;
};