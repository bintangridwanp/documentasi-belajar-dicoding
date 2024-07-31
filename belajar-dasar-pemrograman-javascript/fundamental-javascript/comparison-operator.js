// Comparison operators (operator perbandingan) di JavaScript digunakan untuk membandingkan dua nilai dan mengembalikan hasil dalam bentuk Boolean (true atau false).

// == : Membandingkan kedua nilai, tetapi mengabaikan tipe data.
// != : Membandingkan kedua nilai haruslah tidak sama, tetapi mengabaikan tipe data.
// === : Membandingkan kedua nilai beserta tipe data.
// !== : Membandingkan kedua nilai beserta tipe data haruslah tidak sama.
// > : Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >= : Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// < : Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <= : Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/