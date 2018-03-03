const assert = require('assert');
const app = require('../../src/app');

describe('\'master-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-user');

    assert.ok(service, 'Registered the service');
  });
});
