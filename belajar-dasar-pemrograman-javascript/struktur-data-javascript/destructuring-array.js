// Destructuring adalah fitur di JavaScript yang memungkinkan kita untuk membongkar nilai dari array atau properti dari objek ke dalam variabel yang berbeda dengan cara yang mudah dan efisien.
// Destructuring array memungkinkan Anda untuk mengekstrak nilai dari array dan menetapkannya ke variabel dengan urutan yang sesuai.

const fruits = ["Apple", "Banana", "Cherry"];

// Destructuring array
const [firstFruit, secondFruit, thirdFruit, fourthFruit] = fruits;

console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Cherry
console.log(fourthFruit); // Output: undefined
