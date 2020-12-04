/*
 * @Author: your name
 * @Date: 2020-11-30 15:46:40
 * @LastEditTime: 2020-11-30 16:21:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogd:\projects\express-boilerplate\config\index.js
 */
const systemRoutes = require('./routes/systemRoutes');
const publicRoutes = require('./routes/publicRoutes');

const config = {
  migrate: false,
  systemRoutes,
  publicRoutes,
  port: process.env.PORT || '2020',
};

module.exports = config;
