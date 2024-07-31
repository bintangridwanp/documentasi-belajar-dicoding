// function adalah sebuah blok kode yang dirancang untuk menjalankan tugas tertentu atau menghitung nilai berdasarkan instruksi yang diberikan.
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 10))

// contoh penggunaan function
function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "English");

// output : Bonjour Harry!