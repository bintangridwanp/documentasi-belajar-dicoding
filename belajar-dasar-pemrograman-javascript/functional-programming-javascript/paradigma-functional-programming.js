// Functional Programming (FP) adalah paradigma pemrograman di mana komputasi dilakukan dengan mengevaluasi fungsi-fungsi murni.
// Berbeda dengan pemrograman imperatif, di mana fokusnya adalah pada pernyataan dan perubahan status, FP menekankan pada penggunaan fungsi sebagai elemen dasar untuk membangun program.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
// Contoh kode di atas merupakan salah satu gaya penulisan kode imperatif.

const name = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMarks = names.map((name) => `${name}!`);

console.log(newNamesWithExcMarks);

// output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// Coba bandingkan dengan kode sebelumnya, tentu ini jauh lebih mudah dibaca dan ringkas. Yap! Inilah yang disebut dengan gaya deklaratif.