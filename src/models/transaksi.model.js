// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const transaksi = sequelizeClient.define('transaksi', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kodeTransaksi:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    userid:{
      type: DataTypes.STRING(200)
    },
    tanggal:{
      type: DataTypes.STRING(200)
    },
    itemid:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    kodeKategori:{
      type: DataTypes.STRING(200),
      allowNull: true
    },
    statusAktif:{
      type: DataTypes.STRING(200)
    },
    harga:{
      type: DataTypes.STRING(200)
    },
    updatedBy:{
      type: DataTypes.STRING(200),
      allowNull: true
    }

  },{
    freezeTableName: true,
     tableName: 'tbltransaksi'
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  transaksi.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return transaksi;
};
