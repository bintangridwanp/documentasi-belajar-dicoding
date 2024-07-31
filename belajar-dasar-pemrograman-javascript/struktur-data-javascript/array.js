// Tipe data array digunakan untuk menyimpan koleksi elemen dalam satu variabel. Elemen-elemen ini bisa berupa tipe data apa saja, termasuk angka, string, objek, atau bahkan array lainnya.
// Array di JavaScript adalah struktur data yang berurutan, di mana setiap elemen memiliki indeks numerik yang dimulai dari 0.

//Contoh penggunaan array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// output: [ 'Cokelat', 42.5, 22, true, 'Programming' ]



// pop() dalam JavaScript digunakan untuk menghapus elemen terakhir dari sebuah array dan mengembalikannya.
myArray.pop();
console.log(myArray)

// delete digunakan untuk menghapus elemen dari array,
delete myArray[1];
console.log(myArray);

//splice() dalam JavaScript digunakan untuk mengubah konten array dengan menghapus, mengganti, atau menambahkan elemen baru.
myArray.splice(1, 0,"putih", "hitam"); // 1 : start perubahan, 0 : jumlah element yang dihapus,  hitam & putih : perubahan yang dimasuakan
myArray.splice(2, 1);
console.log(myArray)

