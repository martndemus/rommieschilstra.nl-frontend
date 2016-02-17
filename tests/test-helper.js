import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

import QUnit from 'qunit';

QUnit.assert.containsText = function(text, expected, message) {
  text = text.replace(/\s+/g, ' ');
  expected = expected.replace(/\s+/g, ' ');
  message = message || `Expected ${QUnit.dump.parse(text)} to contain ${QUnit.dump.parse(expected)}`;
  this.push(text.indexOf(expected) !== -1, text, expected, message);
};

setResolver(resolver);
