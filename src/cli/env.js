const parseEnv = () => {
  let rssEnv = '';
  Object.entries(process.env)
    .filter((env) => env[0].startsWith('RSS_'))
    .forEach((env) => {
      rssEnv += `${env[0]}=${env[1]}; `;
    });

  if (rssEnv) {
    console.log(rssEnv);
  }
};

parseEnv();
