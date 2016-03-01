import { moduleForComponent, test } from 'ember-qunit';
import startMirage from '../../helpers/setup-mirage-for-integration';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('deferred-image', 'Integration | Component | {{deferred-image}}', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('It shows an image', function(assert) {
  assert.expect(1);
  let image = server.create('image');
  this.set('image', image);
  this.render(hbs`{{deferred-image image=image}}`);

  assert.equal(this.$('img').attr('src'), image.imageUrl);
});

test('It shows a spinner before image is loaded', function(assert) {
  let image = server.create('image');
  this.set('image', image);
  this.render(hbs`{{deferred-image image=image}}`);

  assert.ok(this.$('i').hasClass('fa-spinner'));
});
