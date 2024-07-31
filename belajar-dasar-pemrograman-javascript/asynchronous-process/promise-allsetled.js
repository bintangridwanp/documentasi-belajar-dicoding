// Promise.allSettled digunakan untuk menjalankan beberapa Promise secara paralel dan mengembalikan sebuah Promise yang akan terpenuhi setelah semua Promise dalam array yang diberikan selesai.
// baik itu fulfilled atau rejected. Hasilnya adalah sebuah array yang berisi objek yang masing-masing menunjukkan status dari setiap Promise.

//contoh code promise allsetled

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik