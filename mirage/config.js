export default function() {
  this.get('/items');
  this.get('/items/:id');

  this.get('/images', { coalesce: true });
  this.get('/images/:id');
}
