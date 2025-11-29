// Product Array
const products = [
  { id: 'p1', name: 'Wireless Headphones' },
  { id: 'p2', name: 'Smart Watch' },
  { id: 'p3', name: 'Bluetooth Speaker' },
  { id: 'p4', name: 'Fitness Tracker' },
  { id: 'p5', name: '4K Monitor' }
];

// Populate Product Select
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
