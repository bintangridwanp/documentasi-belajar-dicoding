// Code yang tidak ada error
try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

// Code yang ada error
try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2) // Tidak akan dilanjutkan dikarenakan ada error
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log("Terjadi error!"); // (4)

  // Untuk menampilkan pesan dari parameter error.
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  // Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
  console.log("Akan tetap dieksekusi");
}
