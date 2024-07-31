// Higher-Order Function (HOF) adalah fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi sebagai hasil.
// Teknik ini sangat umum dalam pemrograman fungsional dan banyak digunakan dalam JavaScript untuk memanipulasi dan mengolah data dengan cara yang lebih modular dan elegan.

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */

/*
Teknik Higher-Order Function biasanya digunakan untuk:

Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
Membuat utilities yang dapat digunakan di berbagai tipe data.
Membuat teknik currying atau function composition.
 */