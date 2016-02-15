import Ember from 'ember';
import Component from 'ember-component';

import computed from 'ember-computed';
import get from 'ember-metal/get';

const { guidFor } = Ember;

export default Component.extend({
  init() {
    this.elementId = `${guidFor(this)}-item-thumbnail-${get(this, 'item.id')}`;
    this._super(...arguments);
  },

  classNames: ['item-thumbnail']
});
