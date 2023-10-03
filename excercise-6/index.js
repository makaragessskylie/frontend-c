import helloWorld from './helloWorld';
const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  }
  messages();

import ambilDataUser from './ambilDataUser';
ambilDataUser()
  .then((users) => {
    console.log("Data Users:", users);
  })
  .catch((error) => {
    console.error("Error in index.js:", error);
  });

import { ambilDataUserAsync } from './ambilDataUserAsync';
async function main() {
  try {
    const users = await ambilDataUserAsync();
    console.log("Data Users:", users);
  } catch (error) {
    console.error("Error in index.js:", error);
  }
}
main();

