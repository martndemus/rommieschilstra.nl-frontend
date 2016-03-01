import { moduleForComponent, test } from 'ember-qunit';
import startMirage from '../../helpers/setup-mirage-for-integration';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-details', 'Integration | Component | {{item-details}}', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('It renders item details', function(assert) {
  let item = server.create('item');
  this.set('item', item);
  this.render(hbs`{{item-details item=item}}`);

  let textContent = this.$().text().trim();
  assert.containsText(textContent, item.title);
  assert.containsText(textContent, item.description);
  assert.containsText(textContent, item.price);
});

test('It renders an image gallery', function(assert) {
  let item = server.create('item');
  item.images = server.createList('image', 3);
  this.set('item', item);
  this.render(hbs`{{item-details item=item}}`);
  assert.equal(this.$('img').length, 4);
});
