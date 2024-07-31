// Destructuring adalah fitur di JavaScript yang memungkinkan kita untuk membongkar nilai dari array atau properti dari objek ke dalam variabel yang berbeda dengan cara yang mudah dan efisien.
// Destructuring object memungkinkan Anda untuk mengekstrak properti dari objek dan menetapkannya ke variabel dengan nama yang sesuai dengan nama properti.


const person = {
    name: "John",
    age: 30,
    date: undefined,
    city: "New York"
};

// Destructuring object dengan nama variabel berbeda
const { name: personName, age: personAge, date = "July", city: personCity } = person;

console.log(personName); // Output: John
console.log(personAge); // Output: 30
console.log(personCity); // Output: New York
console.log(date) // July