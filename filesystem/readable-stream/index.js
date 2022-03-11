const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'note.txt'), {
  highWaterMark: 10, // 10 bytes, 1 byte per character
});

readableStream.on('readable', () => {
  try{
    process.stdout.write(`${readableStream.read()} \n`); // ad \n to see the chunk
  } catch(error) {
    console.log(error);
    // catch error when the chunk cannot be read
  }
});

readableStream.on('end', () => {
  console.log('Done');
});
