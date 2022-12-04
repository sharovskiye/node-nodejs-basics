import { pipeline, Transform } from 'stream';

const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().trim().split('').reverse().join('') + '\n');
      callback();
    },
  });

  pipeline(process.stdin, transform, process.stdout, (err) => {
    console.log(err);
  });
};

await transform();
