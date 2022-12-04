import { open } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const stream = (
      await open(__dirname + '/files/fileToCalculateHashFor.txt')
    ).createReadStream({ encoding: 'utf8' });

    stream.on('data', function (chunk) {
      const hash = createHash('sha256');
      hash.update(chunk);
      console.log(hash.digest('hex'));
    });
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
