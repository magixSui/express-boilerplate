const express = require('express');
const { publicRoutes, systemRoutes } = require('../../config');
const routesMapper = require('./routesMapper');

let sysRoutes = express.Router();
let pubRoutes = express.Router();
module.exports = function Router(app) {
  app.use('/sys', sysRoutes);
  app.use('/api', pubRoutes);
  routesMapper(sysRoutes, systemRoutes, '../controllers/system');
  routesMapper(pubRoutes, publicRoutes , '../controllers/system');
};
