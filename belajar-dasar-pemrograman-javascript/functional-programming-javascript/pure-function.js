// Pure Function adalah konsep dalam pemrograman fungsional yang mengacu pada fungsi yang selalu memberikan output yang sama untuk input yang sama dan tidak menyebabkan efek samping (side effects).

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/**
 * Output:
 *  {
 person: { name: 'Bobo', age: 18 },
 newPerson: { name: 'Bobo', age: 18 }
 }
 */

// dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.

/*
Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

    Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    Hanya bergantung pada argumen yang diberikan.
    Tidak menimbulkan efek samping.
 */