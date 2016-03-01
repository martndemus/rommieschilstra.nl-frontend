import { moduleForComponent, test } from 'ember-qunit';
import startMirage from '../../helpers/setup-mirage-for-integration';
import hbs from 'htmlbars-inline-precompile';

import run from 'ember-runloop';

moduleForComponent('image-gallery', 'Integration | Component | {{image-gallery}}', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('It renders a list of images', function(assert) {
  let images = server.createList('image', 10);
  this.set('images', images);
  this.render(hbs`{{image-gallery images=images}}`);

  assert.equal(this.$('.image-gallery__list__item').length, 10);
});

test('It shows the first image in large by default', function(assert) {
  let images = server.createList('image', 3);
  this.set('images', images);
  this.render(hbs`{{image-gallery images=images}}`);

  assert.equal(this.$('.image-gallery__selected img').attr('src'),
               images[0].imageUrl);
});

test('Clicking on a thumbnail sets that one selected', function(assert) {
  let images = server.createList('image', 3);
  this.set('images', images);
  this.render(hbs`{{image-gallery images=images}}`);

  run(() => this.$('.image-gallery__list img:eq(1)').click());

  assert.equal(this.$('.image-gallery__selected img').attr('src'),
               images[1].imageUrl);
});

test('SelectedImage can be passed in', function(assert) {
  let images = server.createList('image', 3);
  this.set('images', images);
  this.set('selectedImage', images[1]);
  this.render(hbs`{{image-gallery images=images selectedImage=selectedImage}}`);

  assert.equal(this.$('.image-gallery__selected img').attr('src'),
               images[1].imageUrl);
});
