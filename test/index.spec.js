import { testPrimality, power } from '../dist/index.js';

const testPower = (expected, base, exponent, mod = 0) => {
  const surplus = power(base, exponent, mod);
  const doesMatch = Number(surplus) === expected;
  if (doesMatch) {
    console.log(`testPower: Passed`);
  } else {
    console.log(`testPower: Failed: got ${surplus} while ${expected} is expected`);
  }
}

const testMR = (n, k, expected) => {
  const isPrime = testPrimality(n, k);
  const doesMatch = isPrime === expected;
  if (doesMatch) {
    console.log(`testMR: Passed`);
  } else {
    console.log(`testMR: Failed: got ${isPrime} while ${expected} is expected`);
  }
};

testPower(441713175, 280931774, 61035, 1000000007);
testPower(270136, 232342, 11234342, 421341);
testPower(34, 123, 255, 923);
testPower(46656, 6, 6);
testPower(4, 4, 3, 12);

testMR(2n, 5, true);
testMR(20171203n, 5, false);
testMR(13n, 5, true);
testMR(BigInt(1e9) + 7n, 8, true);
