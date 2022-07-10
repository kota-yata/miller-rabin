import { randomInt } from "./utils/random.js";

const power = (base: number, exponent: number, mod: number): number => {
  // Imitate pow() of Math lib in Python
  return 0;
};

const millerRabin = (n: number, t: number, s: number): boolean => {
  const a = randomInt(1, n); // 1 < a < n
  if (Math.pow(a, t) % n === 1) return true;
  let isPrime = false;
  for (let i = 1; i < s; i++) {
    const exponent = Math.pow(2, i) * t;
    console.log(exponent);
    const surplus = Math.pow(a, exponent) % n;
    console.log(surplus);
    if (surplus === 1) {
      isPrime = true;
      break;
    }
  }
  return isPrime;
}

export const testPrimality = (n: number, k: number): boolean => {
  n = Math.abs(n);
  if (n === 2) return true;
  if (n % 2 === 0 || n < 2) return false;
  let t = (n - 1) / 2;
  let s = 1;
  while (t % 2  === 0) {
    t = t >> 1;
    s++;
  }
  let isPrime = true;
  for (let i = 0; i < k; i++) {
    if (!millerRabin(n, t, s)) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};
