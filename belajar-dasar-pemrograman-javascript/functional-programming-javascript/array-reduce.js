// Metode reduce() dalam JavaScript digunakan untuk mengurangi (reduce) array menjadi satu nilai tunggal berdasarkan fungsi yang diberikan.
// Ini adalah salah satu dari beberapa metode tingkat tinggi yang tersedia untuk array dalam JavaScript, bersama dengan map, filter, dan forEach.

const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);


// output: 313