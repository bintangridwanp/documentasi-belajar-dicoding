// Metode some() pada objek Array dalam JavaScript digunakan untuk menguji apakah setidaknya satu elemen dalam array memenuhi kondisi yang diberikan oleh sebuah fungsi callback.
// Metode ini mengembalikan nilai true jika setidaknya satu elemen memenuhi kondisi, dan false jika tidak ada elemen yang memenuhi kondisi.

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

// output: true
