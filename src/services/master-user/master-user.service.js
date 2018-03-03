// Initializes the `master-user` service on path `/master-user`
const createService = require('feathers-sequelize');
const createModel = require('../../models/master-user.model');
const hooks = require('./master-user.hooks');
const filters = require('./master-user.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'master-user',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/master-user', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('master-user');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
