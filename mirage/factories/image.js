import { Factory, faker } from 'ember-cli-mirage';

const { round, random } = Math;

export default Factory.extend({
  description: () => faker.commerce.productName(),
  imageUrl: () =>
    `http://lorempixel.com/900/900?${round(random() * 10E9)}`
});
