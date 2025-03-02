const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Type addresses in delimited by ;`, addresses => {
    const addys = addresses.split(';').map((str) => str.trim()).filter((str) => str != "")
  console.log(`Here are the following addresses: ${addys}`);
  rl.close();
});
