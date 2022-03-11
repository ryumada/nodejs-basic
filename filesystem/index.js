// import fs module, fs stands for filesystem
const fs = require('fs');
const path = require('path');

/* ------------------------ read file asynchronously ------------------------ */
const fileReadCallback = (error, data) => {
  if(error) {
    console.log('error reading the file');
    return;
  }

  console.log(data);
}

fs.readFile(path.resolve(__dirname, 'todo.txt'), 'UTF-8', fileReadCallback);

/* ------------------------- read file synchronously ------------------------ */
const dataSync = fs.readFileSync(path.resolve(__dirname, 'todo.txt'), 'utf-8');
console.log(`\nthis is synchronous output: \n ${dataSync}`);
