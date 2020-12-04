/*
 * @Author: your name
 * @Date: 2020-11-30 16:06:57
 * @LastEditTime: 2020-11-30 16:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogd:\projects\express-boilerplate\config\connection.js
 */
/*
 * @Author: your name
 * @Date: 2020-11-30 14:02:44
 * @LastEditTime: 2020-11-30 14:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogd:\projects\express-rest-api-boilerplate-master\express-rest-api-boilerplate-master\config\connection.js
 */
const development = {
  database: 'magix',
  username: 'root',
  password: 'root',
  host: 'localhost',
  dialect: 'mysql',
};

const testing = {
  database: 'magix',
  username: 'root',
  password: 'root',
  host: 'localhost',
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
