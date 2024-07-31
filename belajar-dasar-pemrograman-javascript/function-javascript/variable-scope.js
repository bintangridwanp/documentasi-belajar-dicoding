// Variable Scope (lingkup variabel) mengacu pada bagian dari program di mana variabel dapat diakses atau diidentifikasi.

/*
Jenis-jenis Scope dalam JavaScript:
1. Global Scope:
  Variabel yang dideklarasikan di luar semua fungsi atau blok kode memiliki global scope.
  Variabel global dapat diakses dan dimodifikasi dari mana saja di dalam program.
2. Local Scope:
  Variabel yang dideklarasikan di dalam fungsi memiliki local scope.
  Variabel local hanya dapat diakses dari dalam fungsi tempat mereka dideklarasikan.
3. Block Scope (sejak ES6):
  Variabel yang dideklarasikan dengan let atau const di dalam blok {} memiliki block scope.
  Variabel block scope hanya dapat diakses di dalam blok di mana mereka dideklarasikan.
*/

// Contoh

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)

/* output
400
*/