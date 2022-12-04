import { createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  try {
    const stream = createWriteStream(__dirname + '/files/fileToWrite.txt');
    process.stdin.pipe(stream);
  } catch (err) {
    console.log(err);
  }
};

await write();
