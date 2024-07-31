// WeakMap adalah koleksi pasangan kunci-nilai di mana kunci hanya bisa berupa objek dan nilai bisa apa saja.
// WeakMap bersifat lemah (weak), yang berarti kunci objek yang tidak lagi digunakan dalam program secara aktif dapat dihapus dari WeakMap oleh sistem garbage collector.

let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "Value associated with obj1");
weakMap.set(obj2, "Value associated with obj2");

console.log(weakMap.get(obj1)); // Output: "Value associated with obj1"

obj1 = null; // Menjadikan obj1 tidak lagi dapat diakses
// Di sini, obj1 bisa dihapus dari WeakMap oleh garbage collector
