import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('espacio-blanco', 'Integration | Component | espacio blanco', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{espacio-blanco}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#espacio-blanco}}
      template block text
    {{/espacio-blanco}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
