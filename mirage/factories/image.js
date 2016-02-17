import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  description: () => faker.commerce.productName(),
  imageUrl: () => faker.image.imageUrl(1800, 1800)
});
