export default function(server) {
  let images = server.createList('image', 500);

  let items = [];
  for (let i = 0; i < 100; i++) {
    let itemImages = images.slice(i * 5, i * 5 + 5).map((image) => image.id);
    items.push(server.create('item', { imageIds: itemImages }));
  }
}
