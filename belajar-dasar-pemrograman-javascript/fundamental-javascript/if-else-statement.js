// Pernyataan if/else adalah salah satu dari struktur kontrol dasar dalam pemrograman yang digunakan untuk mengatur alur eksekusi program berdasarkan kondisi tertentu.

if (condition) {
    // Blok kode yang dieksekusi jika kondisi terpenuhi (true)
} else {
    // Blok kode alternatif yang dieksekusi jika kondisi tidak terpenuhi (false)
}

//Contoh 1
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */


//Contoh 2
let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/