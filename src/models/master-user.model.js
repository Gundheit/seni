// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const masterUser = sequelizeClient.define('user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    group: {
      type: DataTypes.STRING(200),
    },
    name:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    createdby: {
      type: DataTypes.STRING(200),
    },
    updatedby:{
      type: DataTypes.STRING(200),
    }
  },{
    freezeTableName: true,
     tableName: 'user'
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  masterUser.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return masterUser;
};
