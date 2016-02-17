import Route from 'ember-route';

import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Route.extend({
  titleToken(model) {
    return get(model, 'title');
  },

  model({ id }) {
    return this.store.find('item', id);
  },

  setupController(controller, model) {
    set(controller, 'item', model);
    this._super(...arguments);
  }
});
