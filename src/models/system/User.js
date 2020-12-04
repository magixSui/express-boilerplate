// const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");
const bcryptService = require('../../services/system/bcrypt.service');

const sequelize = require('../../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().encrypt(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'sys_user';

const User = sequelize.define('Sys_user', {
  user_id: {
    type: DataTypes.BIGINT(20),
    primaryKey: true,
    autoIncrement: true
  },
  dept_id: {
    type: DataTypes.BIGINT(20),
    unique: true,
  },
  user_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  nick_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  user_type: {
    type: DataTypes.STRING(2),
  },
  email: {
    type: DataTypes.STRING(50),
  },
  phonenumber: {
    type: DataTypes.STRING(11),
  },
  sex: {
    type: DataTypes.STRING(1),
  },
  avatar: {
    type: DataTypes.STRING(100),
  },
  password: {
    type: DataTypes.STRING(100),
  },
  status: {
    type: DataTypes.STRING(1),
  },
  del_flag: {
    type: DataTypes.STRING(1),
  },
  login_ip: {
    type: DataTypes.STRING(50),
  },
  login_date: {
    type: DataTypes.DATE(6),
  },
  create_by: {
    type: DataTypes.STRING(64),
  },
  update_by: {
    type: DataTypes.STRING(64),
  },
  remark: {
    type: DataTypes.STRING(500),
  }
}, { hooks, tableName });

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

User.prototype.isAdmin = function (user) {
  return user.user_id === 1;
};

module.exports = User;
