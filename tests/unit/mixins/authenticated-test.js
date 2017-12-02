import EmberObject from '@ember/object';
import AuthenticatedMixin from 'the-blankv2/mixins/authenticated';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthenticatedObject = EmberObject.extend(AuthenticatedMixin);
  let subject = AuthenticatedObject.create();
  assert.ok(subject);
});
