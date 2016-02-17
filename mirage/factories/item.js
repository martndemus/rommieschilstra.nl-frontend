import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.commerce.productName(),
  description: () => faker.lorem.paragraphs(),
  price: () => faker.commerce.price(),
  imgThumbnail: () => faker.image.imageUrl(600, 600)
});
