/*
 * @Author: magix
 * @Date: 2020-11-30 15:34:45
 * @LastEditTime: 2020-11-30 16:26:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projects\express-boilerplate\index.js
 */
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const Router = require('./src/router');

const config = require('./config/');
const dbService = require('./src/services/system/db.service');

const environment = process.env.NODE_ENV;

const app = express();
const server = http.Server(app);
const DB = dbService(environment, config.migrate).start();

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Router(app);

server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});