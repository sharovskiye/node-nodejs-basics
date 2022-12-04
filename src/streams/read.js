import { open } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const stream = (
      await open(__dirname + '/files/fileToRead.txt')
    ).createReadStream({ encoding: 'utf8' });

    stream.pipe(process.stdout);
  } catch (err) {
    console.log(err);
  }
};

await read();
