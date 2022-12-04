import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    await mkdir(__dirname + '/files_copy');

    const files = await readdir(__dirname + '/files');
    for (const file of files) {
      await copyFile(
        `${__dirname}/files/${file}`,
        `${__dirname}/files_copy/${file}`
      );
    }
  } catch (err) {
    if (err.syscall === 'mkdir' || err.syscall === 'scandir') {
      throw new Error('FS operation failed');
    }
  }
};

await copy();
