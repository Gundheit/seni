// Initializes the `master-barang` service on path `/master-barang`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-barang.model');
const hooks = require('./master-barang.hooks');
const filters = require('./master-barang.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-barang',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/master-barang', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-barang');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
