import { readdir } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const files = await readdir(__dirname + '/files');
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
