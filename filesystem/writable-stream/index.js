const fs = require('fs');
const path = require('path');

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

writableStream.write('this is the first line of the text!\n');
writableStream.write('this is the second line of the text!\n');
writableStream.end('this is the end of writableStream.');
