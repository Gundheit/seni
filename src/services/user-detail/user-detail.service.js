// Initializes the `user-detail` service on path `/user-detail`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user-detail.model');
const hooks = require('./user-detail.hooks');
const filters = require('./user-detail.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'user-detail',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-detail', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('user-detail');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
