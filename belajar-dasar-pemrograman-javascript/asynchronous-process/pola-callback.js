//Callback adalah fungsi yang dilewatkan sebagai argumen ke fungsi lain dan dipanggil setelah tugas selesai.

// function lakukanTugas(callback) {
//     console.log('Tugas dimulai');
//     setTimeout(() => {
//         console.log('Tugas selesai');
//         callback();
//     }, 2000);
// }
//
// function setelahTugasSelesai() {
//     console.log('Ini dilakukan setelah tugas selesai');
// }
//
// lakukanTugas(setelahTugasSelesai);


//Contoh code yang lain

function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline) { //argumen isOffline pada fungsi getUsers() untuk menentukan proses asynchronous berhasil atau gagal.
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('process success:', users);
}

getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline