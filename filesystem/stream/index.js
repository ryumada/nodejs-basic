const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
  highWaterMark: 15 // 15 bytes, 1 byte per character
});

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
  try {
    const readableContent = readableStream.read();
    if(readableContent !== null) {
      writableStream.write(`${readableContent}\n`);
      return;
    }
    
    writableStream.write('\n');
  } catch (error) {
    console.log(error);
  }
});

readableStream.on('end', () => {
  writableStream.end('The end of readableStream line.')
});
