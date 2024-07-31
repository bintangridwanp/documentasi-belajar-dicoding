// Metode filter() dalam JavaScript adalah salah satu dari beberapa metode bawaan yang disediakan oleh objek Array.
// Metode ini digunakan untuk membuat array baru dari semua elemen yang lolos uji dari fungsi predikat tertentu.

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */