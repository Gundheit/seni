const assert = require('assert');
const app = require('../../src/app');

describe('\'master-barang\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-barang');

    assert.ok(service, 'Registered the service');
  });
});
