// Promisifikasi adalah teknik untuk mengubah fungsi callback-based menjadi fungsi yang mengembalikan Promise.

// Fungsi getUsers() versi callback-based
function getUsers(isOffline, callback) {
    // Simulasi jeda jaringan
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        // Jika offline, panggil callback dengan error
        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        // Jika online, panggil callback dengan data pengguna
        callback(null, users);
    }, 3000);
}

// Menggunakan util.promisify untuk membuat versi Promise dari getUsers()
const { promisify } = require('util');
const getUsersPromise = promisify(getUsers);

// Menggunakan getUsersPromise untuk memanggil fungsi getUsers() yang telah dipromisifikasi

// Contoh penggunaan: getUsersPromise dengan isOffline = false
getUsersPromise(false)
    .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
    .catch(err => console.log(err.message));

// Contoh penggunaan: getUsersPromise dengan isOffline = true
getUsersPromise(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message)); // 'cannot retrieve users due offline'
