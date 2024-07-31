//Spread operator (...) adalah fitur dalam JavaScript, Operator ini memungkinkan elemen dari array atau properti dari objek untuk diperluas atau disalin ke dalam array atau objek lainnya.

const favoritesSatu = ["Seafood", "Salad", "Nugget", "Soup"];
const favoritesDua = ["Nasi goreng"]

console.log("Mie Goreng", ...favoritesSatu, ...favoritesDua);

// output : Mie Goreng Seafood Salad Nugget Soup Nasi goreng

//Contoh dalam object
const namaAwal = { firstName: 'Hartono', age: 30 };
const namaAkhir = { lastName: 'Budi', gender: 'Male' };

const namaLengkap = { ...namaAwal, ...namaAkhir };

console.log(namaLengkap);

// output : { firstName: 'Hartono', age: 30, lastName: 'Budi', gender: 'Male' }

