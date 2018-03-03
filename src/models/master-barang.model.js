// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const masterBarang = sequelizeClient.define('tblbarang', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deskripsi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },    

  },{
    freezeTableName: true,
     tableName: 'tblbarang'
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  masterBarang.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return masterBarang;
};
