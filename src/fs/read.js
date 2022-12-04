import { open } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const stream = (
      await open(__dirname + '/files/fileToRead.txt')
    ).createReadStream({ encoding: 'utf8' });

    stream.on('data', function (chunk) {
      console.log(chunk);
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
