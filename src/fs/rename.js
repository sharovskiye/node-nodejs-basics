import { rename as fsRename } from 'node:fs/promises';
import { access } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    access(__dirname + '/files/properFilename.md', async (err) => {
      if (!err) throw new Error('FS operation failed');

      await fsRename(
        __dirname + '/files/wrongFilename.txt',
        __dirname + '/files/properFilename.md'
      );
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
