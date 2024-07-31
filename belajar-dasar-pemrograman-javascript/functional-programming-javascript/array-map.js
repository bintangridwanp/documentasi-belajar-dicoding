// Metode map() dalam JavaScript adalah sebuah fungsi bawaan dari objek Array yang digunakan untuk membuat array baru dengan hasil dari pemanggilan fungsi yang disediakan pada setiap elemen dalam array yang memanggil map().

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */