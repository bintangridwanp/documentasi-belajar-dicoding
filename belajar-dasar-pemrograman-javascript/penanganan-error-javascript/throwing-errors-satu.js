// Code tanpa error
const json = '{ "name": "Yoda", "age": 20 }';

try {
    // JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object.
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
