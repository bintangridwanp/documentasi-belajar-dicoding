// Closure adalah fitur yang kuat dan penting dalam JavaScript yang terjadi saat sebuah fungsi memiliki akses ke variabel di luar cakupannya (scope) tempat ia didefinisikan.

// Contoh penggunaan closure

function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // Inner function bisa mengakses outerVar dari outerFunction
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Output: I am from outer function
