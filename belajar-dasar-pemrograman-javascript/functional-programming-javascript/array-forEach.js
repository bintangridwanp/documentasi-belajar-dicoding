// Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */

// Cara deklaratif

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names.forEach((name) => {
    console.log(`Hello, ${name}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */

// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue.
// Anda bisa melakukannya pada perulangan for

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

names.forEach((name) => {
    // if(name === 'Jeff') continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
});