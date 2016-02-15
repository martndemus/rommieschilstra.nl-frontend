import Route from 'ember-route';
import set from 'ember-metal/set';

export default Route.extend({
  model() {
    return this.store.findAll('item');
  },

  setupController(controller, model) {
    set(controller, 'items', model);
    this._super(...arguments);
  }
});
