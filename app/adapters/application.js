import JSONApiAdapter from 'ember-data/adapters/json-api';

export default JSONApiAdapter.extend({
  coalesceFindRequests: true
});
