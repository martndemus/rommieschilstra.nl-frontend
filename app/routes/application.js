import Route from 'ember-route';

import { wrap } from 'ember-array/utils';

export default Route.extend({
  title(tokens) {
    tokens = wrap(tokens);
    tokens.push('Rommie Schilstra');
    return tokens.join(' - ');
  }
});
