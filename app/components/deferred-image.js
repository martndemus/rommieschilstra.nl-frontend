import RSVP from 'rsvp';
import Component from 'ember-component';
import computed from 'ember-computed';

import get from 'ember-metal/get';

export default Component.extend({
  imagePromise: computed('image.imageUrl', function() {
    let imageUrl = get(this, 'image.imageUrl');
    let image = new Image();
    let deferred = RSVP.defer();

    image.src = imageUrl;
    image.onload = deferred.resolve;

    return deferred.promise;
  })
});
