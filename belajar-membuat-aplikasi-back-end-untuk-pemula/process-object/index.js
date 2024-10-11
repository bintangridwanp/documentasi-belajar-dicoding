// Mengambil nilai heapUsed saat aplikasi pertama kali dijalankan
const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1

// Mengambil nilai argumen ketiga (index ke-2) dari process.argv
const yourName = process.argv[2]; // TODO 2

// Mengambil nilai NODE_ENV dari process.env
const environment = process.env.NODE_ENV || 'development'; // TODO 3 (default ke 'development' jika NODE_ENV tidak di-set)

for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

// Mengambil nilai heapUsed setelah proses looping selesai
const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
