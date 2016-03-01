import Component from 'ember-component';
import { A as emberArray } from 'ember-array/utils';

import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  didReceiveAttrs() {
    let images = emberArray(get(this, 'images'));
    let selectedImage =
      get(this, 'selectedImage') || get(images, 'firstObject');

    set(this, 'selectedImage', selectedImage);

    this._super(...arguments);
  }
});
