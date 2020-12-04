// const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");

const sequelize = require('../../../config/database');

const tableName = 'sys_role';

const Role = sequelize.define('Sys_role', {
  role_id: {
    type: DataTypes.BIGINT(20),
    primaryKey: true,
    autoIncrement: true
  },
  role_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  role_key: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  role_sort: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  data_scope: {
    type: DataTypes.STRING(1)
  },
  menu_check_strictly: {
    type: DataTypes.STRING(1)
  },
  dept_check_strictly: {
    type: DataTypes.STRING(1)
  },
  status: {
    type: DataTypes.STRING(1)
  },
  del_flag: {
    type: DataTypes.STRING(1)
  },
  create_by: {
    type: DataTypes.STRING(64)
  },
  update_by: {
    type: DataTypes.STRING(64)
  },
  remark: {
    type: DataTypes.STRING(500)
  }
}, { tableName });

// eslint-disable-next-line
Role.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = Role;
