// Tipe data object digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks.
// Objek adalah struktur data yang berisi pasangan kunci (key) dan nilai (value), di mana kunci adalah string atau simbol dan nilai bisa berupa tipe data apa saja.

// Contoh tipe data object
const user = {
    firstName: "Luke",
    lastName: "Skywalker", // properti
    age: 19,
    isJedi: true,
    // value : nilai
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

// kata kunci delete digunakan untuk menghapus properti dari objek.

