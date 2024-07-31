// Export: Digunakan untuk mengekspos fungsi, variabel, atau objek dari sebuah modul sehingga dapat diakses oleh modul lain.

const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

module.exports = coffeeStock;

console.log(module);

const coffeeStocks = require('./state');

const makeCoffee = (type, miligrams) => {
    if (coffeeStocks[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);

/* output
Kopi berhasil dibuat!
*/

// untuk melihat hasilnya, Anda harus menjalankan dengan perintah node state.js.