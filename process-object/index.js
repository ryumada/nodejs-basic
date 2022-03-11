const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
  // This process will increase memory usage
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hi, ${yourName}`);
console.log(`Mode Environment: ${environment}`);
console.log(`The memory usage was increased from ${initialMemoryUsage} to ${currentMemoryUsage}`);
