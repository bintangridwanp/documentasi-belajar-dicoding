// rest parameter adalah fitur yang memungkinkan kita untuk merepresentasikan sejumlah dari argumen fungsi sebagai array.

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/