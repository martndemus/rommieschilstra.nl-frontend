import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import { faker } from 'ember-cli-mirage';

moduleForComponent('item-thumbnail', 'Integration | Component | {{item-thumbnail}}', {
  integration: true
});

test('It renders a thumbnail', function(assert) {
  let imageUrl = faker.image.image();
  let title = 'Example Item';
  this.set('item', { title, imgThumbnail: imageUrl });
  this.render(hbs`{{item-thumbnail item=item}}`);

  assert.equal(this.$('img').length, 1);
  assert.equal(this.$('img').attr('src'), imageUrl);
  assert.equal(this.$('img').attr('alt'), title);
});

test('It adds a caption', function(assert) {
  let title = 'Example Item';
  let price = 19.99;
  this.set('item', { title, price });
  this.render(hbs`{{item-thumbnail item=item}}`);

  assert.equal(this.$().get(0).innerText.trim(), `${title} €${price}`);
});

test('It adds the item id to the element id', function(assert) {
  let id = 1;
  this.set('item', { id });
  this.render(hbs`{{item-thumbnail item=item}}`);

  assert.equal(this.$(`[id$="-item-thumbnail-${id}"]`).length, 1);
});
