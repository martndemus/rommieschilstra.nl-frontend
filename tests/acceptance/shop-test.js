import { test } from 'qunit';
import moduleForAcceptance from 'rommie-schilstra/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | shop');

test('visiting /shop', function(assert) {
  visit('/shop');

  andThen(() => {
    assert.equal(currentURL(), '/shop');
  });
});

test('shows thumbnails of shop items', function(assert) {
  assert.expect(1);
  server.createList('item', 10);
  visit('/shop');

  andThen(() => {
    assert.equal(find('.item-thumbnail').length, 10);
  });
});

test('A thumbnail is a link to a item', function(assert) {
  assert.expect(1);
  let item = server.create('item', 1);
  visit('/shop');

  andThen(() => {
    let { id } = item;
    assert.equal(find(`a[href$="/shop/${id}"]`).length, 1);
  });
});
