import Ember from 'ember';

export function price([price], { currency = '€' }) {
  return `${currency}${Number(price).toFixed(2)}`;
}

export default Ember.Helper.helper(price);
