import { appendFile } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  appendFile(
    __dirname + '/files/fresh.txt',
    'I am fresh and young',
    { flag: 'wx' },
    (err) => {
      if (err) throw new Error('FS operation failed');
    }
  );
};

await create();
