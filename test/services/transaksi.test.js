const assert = require('assert');
const app = require('../../src/app');

describe('\'transaksi\' service', () => {
  it('registered the service', () => {
    const service = app.service('transaksi');

    assert.ok(service, 'Registered the service');
  });
});
