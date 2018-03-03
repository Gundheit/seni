// Initializes the `masterKategori` service on path `/master-kategori`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-kategori.model');
const hooks = require('./master-kategori.hooks');
const filters = require('./master-kategori.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-kategori',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/master-kategori', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-kategori');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
