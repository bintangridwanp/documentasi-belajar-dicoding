// 1. Pending: Status awal, yang berarti Promise belum diselesaikan atau ditolak.
// 2. Fulfilled: Berarti operasi asynchronous selesai dengan sukses, dan menghasilkan nilai.
// 3. Rejected: Berarti operasi asynchronous gagal, dan menghasilkan alasan (error) kenapa gagal.

let janji = new Promise((resolve, reject) => {
    // Operasi asynchronous
    setTimeout(() => {
        let sukses = false;  // Misalnya ini adalah hasil dari operasi async
        if (sukses) {
            resolve('Operasi berhasil!');
        } else {
            reject('Operasi gagal.');
        }
    }, 2000);
});

janji.then((pesanSukses) => {
    console.log(pesanSukses);  // Output: Operasi berhasil!
}).catch((pesanError) => {
    console.log(pesanError);  // Jika gagal, ini akan di eksekusi
});


//Contoh code lainya.
function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

getUsers(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));