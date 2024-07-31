// memanfaatkan async dan await dalam menangani proses asynchronous.

async function watchMovie() {
    try {
        // Menunggu pengambilan uang dengan fungsi withDrawMoney()
        const money = await withDrawMoney(10);

        // Setelah uang diambil, menunggu pembelian tiket dengan fungsi buyCinemaTicket()
        const ticket = await buyCinemaTicket(money);

        // Setelah mendapatkan tiket, menunggu untuk masuk ke dalam bioskop dengan fungsi goInsideCinema()
        const result = await goInsideCinema(ticket);

        // Jika semua proses selesai tanpa error, mencetak pesan 'enjoy the movie'
        console.log(result);
    } catch (error) {
        // Jika terjadi error di salah satu proses, mencetak pesan error
        console.log(error.message);
    }
}

// Memanggil fungsi watchMovie(), yang merupakan async function, dan menunggu hasilnya dengan .then()
watchMovie().then(() => console.log('done'));

/** output */
// enjoy the movie
// done
