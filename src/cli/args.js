const parseArgs = () => {
  const args = process.argv.reduce(
    (prev, curr) => {
      if (curr.startsWith('--')) {
        prev.hasKey = true;
        prev.result += curr;

        return prev;
      }

      if (prev.hasKey) {
        prev.result += ` is ${curr}, `;
        prev.hasKey = false;
      }
      return prev;
    },
    { hasKey: false, result: '' }
  );

  console.log(args.result);
};

parseArgs();
