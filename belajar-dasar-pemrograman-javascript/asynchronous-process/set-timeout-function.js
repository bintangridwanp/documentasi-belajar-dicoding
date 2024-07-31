//Asynchronous: Kode dapat dijalankan tanpa harus menunggu kode lain selesai. Beberapa tugas dapat berjalan di latar belakang dan JavaScript dapat melanjutkan eksekusi kode lain.
//Synchronous: Kode dieksekusi satu per satu, baris demi baris. Setiap baris menunggu hingga baris sebelumnya selesai sebelum dieksekusi.

//contoh dari penggunaan fungsi setTimeout().
console.log('Selamat datang!');

setTimeout(() => {
    console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)

console.log('Ada yang bisa dibantu?');