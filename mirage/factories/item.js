import { Factory, faker } from 'ember-cli-mirage';

const { round, random } = Math;

export default Factory.extend({
  title: () => faker.commerce.productName(),
  description: () => faker.lorem.paragraphs(),
  price: () => faker.commerce.price(),
  imgThumbnail: () =>
    `http://lorempixel.com/600/600?${round(random() * 10E9)}`
});
