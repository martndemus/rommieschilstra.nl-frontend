import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('price', 'Integration | Helper | {{price}}', {
  integration: true
});

// Replace this with your real tests.
test('Basic invocation', function(assert) {
  this.set('value', 19.99);
  this.render(hbs`{{price value}}`);

  assert.equal(this.$().text().trim(), '€19.99');
});

test('Adds decimals', function(assert) {
  this.set('value', 19);
  this.render(hbs`{{price value}}`);

  assert.equal(this.$().text().trim(), '€19.00');
});

test('Handles strings', function(assert) {
  this.set('value', '19.99');
  this.render(hbs`{{price value}}`);

  assert.equal(this.$().text().trim(), '€19.99');
});

test('Currency symbol', function(assert) {
  this.set('value', '19.99');
  this.render(hbs`{{price value currency="$"}}`);

  assert.equal(this.$().text().trim(), '$19.99');
});
