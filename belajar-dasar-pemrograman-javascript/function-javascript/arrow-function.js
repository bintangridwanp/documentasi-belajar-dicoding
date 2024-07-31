// Arrow function menyediakan cara yang lebih ringkas untuk menulis fungsi, terutama untuk fungsi anonim atau fungsi pendek yang tidak memerlukan konteks this yang berbeda.

// cara penulisan arrow function

// Fungsi reguler
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2,10))

// Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.
// * Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).


