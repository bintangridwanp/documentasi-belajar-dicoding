const coffee = require('./coffee');

console.log(coffee); // Output: { name: 'Tubruk', price: 15000 }

const { firstName, lastName, sapaHalo } = require('./user');

console.log(sapaHalo());  // Output: Hallo Harry, perkenalkan nama saya Potter

console.log(firstName);    // Output: Harry
console.log(lastName);     // Output: Potter
