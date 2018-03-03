// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
const group = sequelizeClient.define('group', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  group_name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  createdby:{
    type: DataTypes.STRING(200),
  },
  updatedby:{
    type: DataTypes.STRING(200),
  }
  },{
    freezeTableName: true,
    tableName: 'group'
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });


  group.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return group;
};
