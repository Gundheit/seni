const assert = require('assert');
const app = require('../../src/app');

describe('\'masterKategori\' service', () => {
  it('registered the service', () => {
    const service = app.service('master-kategori');

    assert.ok(service, 'Registered the service');
  });
});
