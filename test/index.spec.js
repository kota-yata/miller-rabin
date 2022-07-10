import { testPrimality } from '../dist/index.js';

const test = (n, k, expected) => {
  const isPrime = testPrimality(n, k);
  const doesMatch = isPrime === expected;
  if (doesMatch) {
    console.log(`Passed`);
  } else {
    console.log(`Failed: got ${isPrime} while ${expected} is expected`);
  }
};

test(2, 5, true);
test(20171203, 5, false);
test(13, 5, true);
// test(1e9+7, 8, true);
