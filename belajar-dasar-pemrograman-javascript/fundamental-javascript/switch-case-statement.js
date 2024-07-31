// switch statement adalah struktur kontrol dalam pemrograman yang digunakan untuk memilih satu dari beberapa blok kode untuk dieksekusi, berdasarkan nilai dari ekspresi yang dievaluasi.

let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Bonjour!
*/