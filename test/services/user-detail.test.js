const assert = require('assert');
const app = require('../../src/app');

describe('\'user-detail\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-detail');

    assert.ok(service, 'Registered the service');
  });
});
