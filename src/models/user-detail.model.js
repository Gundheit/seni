// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userDetail = sequelizeClient.define('user_detail', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    freezeTableName: true,
     tableName: 'user_detail'
 }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  userDetail.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userDetail;
};
