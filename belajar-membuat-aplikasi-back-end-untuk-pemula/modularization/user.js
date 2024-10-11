const firstName = 'Harry';
const lastName = 'Potter';

// Definisikan fungsi tanpa memanggilnya
const sapaHalo = function () {
    return `Hallo ${firstName}, perkenalkan nama saya ${lastName}`;
}

// Ekspor semua variabel dan fungsi sebagai objek
module.exports = { firstName, lastName, sapaHalo };
