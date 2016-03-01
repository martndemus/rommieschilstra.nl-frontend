import { test } from 'ember-qunit';
import { skip } from 'qunit';
import moduleForAcceptance from 'rommie-schilstra/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Shop');

test('Visiting /shop', function(assert) {
  assert.expect(1);
  visit('/shop');
  andThen(() => assert.equal(currentURL(), '/shop'));
});

test('Shows thumbnails of shop items', function(assert) {
  assert.expect(1);
  server.createList('item', 10);

  visit('/shop');

  andThen(() => assert.equal(find('.item-thumbnail').length, 10));
});

test('Going to a single item', function(assert) {
  assert.expect(1);
  let { id } = server.create('item', 1);

  visit('/shop');

  andThen(() => click(`a[href$="/shop/${id}"]`));
  andThen(() => assert.equal(currentURL(), `/shop/${id}`));
});

moduleForAcceptance('Acceptance | Shop | Item');

test('Visiting an item', function(assert) {
  assert.expect(1);
  let { id } = server.create('item', 1);

  visit(`/shop/${id}`);

  andThen(() => assert.equal(currentURL(), `/shop/${id}`));
});

skip('It renders an item', function(assert) {
  assert.expect(1);
  let { id, title } = server.create('item', 1);

  visit(`/shop/${id}`);

  andThen(() => assert.equal(find(`:contains(${title})`).length, 1));
});
