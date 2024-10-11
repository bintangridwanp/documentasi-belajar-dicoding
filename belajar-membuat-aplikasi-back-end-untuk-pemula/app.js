const informasiMemory = process.memoryUsage();

console.log(informasiMemory);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);