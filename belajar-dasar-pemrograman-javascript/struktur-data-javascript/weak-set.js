// WeakSet adalah koleksi nilai yang unik di mana setiap nilai hanya bisa ada satu kali.

/*
Karakteristik WeakSet:
   1. Referensi Lemah: Nilai dalam WeakSet bersifat lemah, artinya jika tidak ada referensi lain yang mempertahankan nilai tersebut, nilai tersebut dapat dihapus dari WeakSet oleh garbage collector.
   2. Hanya Objek: Nilai dalam WeakSet harus berupa objek, tidak bisa berupa nilai primitif.
   3. Tidak Dapat Diiterasi: WeakSet tidak memiliki metode untuk mengiterasi nilai-nilai di dalamnya, karena itu tidak memiliki metode seperti keys(), values(), atau entries().
 */

let weakSet = new WeakSet();

let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true

obj1 = null; // Menjadikan obj1 tidak lagi dapat diakses
// Di sini, obj1 bisa dihapus dari WeakSet oleh garbage collector
