const takeAChance = require('./take-a-chance');

takeAChance('Yusuf');

const promise1 = takeAChance('Yusuf');

promise1.then(value => {
  console.log(value);
}).catch(error => {
  console.error(error);
});
