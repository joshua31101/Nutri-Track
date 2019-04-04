import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | my-foods', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-foods');
    assert.ok(route);
  });
});
