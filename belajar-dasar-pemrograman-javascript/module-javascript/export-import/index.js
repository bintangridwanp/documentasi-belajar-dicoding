// Import: Digunakan untuk mengimpor fungsi, variabel, atau objek yang diekspor dari modul lain ke dalam modul saat ini.

const coffeeStock = require('./state');

console.log(coffeeStock);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

// kita gunakan method require() :  require adalah sebuah fungsi yang digunakan untuk mengimpor modul-modul di lingkungan Node.js.