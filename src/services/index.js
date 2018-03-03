const masterKategori = require('./master-kategori/master-kategori.service.js');
const masterBarang = require('./master-barang/master-barang.service.js');
const transaksi = require('./transaksi/transaksi.service.js');
const masterUser = require('./master-user/master-user.service.js');
const group = require('./group/group.service.js');
const userDetail = require('./user-detail/user-detail.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(masterKategori);
  app.configure(masterBarang);
  app.configure(transaksi);
  app.configure(masterUser);
  app.configure(group);
  app.configure(userDetail);
};
