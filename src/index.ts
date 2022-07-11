import { randomInt } from "./utils/random.js";

// Imitate pow() of Math lib in Python
export const power = (base: bigint, exponent: bigint, mod: bigint = 0n): bigint => {
  base = BigInt(base);
  exponent = BigInt(exponent);
  mod = BigInt(mod);
  //-------------------
  let ret: bigint = 1n;
  if (mod > 0n) base = base % mod;
  while(exponent) {
    if (exponent & 1n) {
      ret = mod > 0 ? (ret * base) % mod : ret * base
    };
    base = mod > 0 ? (base ** 2n) % mod : base ** 2n;
    exponent = exponent >> 1n;
  }
  return ret;
};

const millerRabin = (n: bigint, t: bigint, s: bigint): boolean => {
  n = BigInt(n);
  t = BigInt(t);
  s = BigInt(s);
  const a = randomInt(1, Number(n)); // 1 < a < n
  let temp = power(a, t, n);
  if (temp === 1n || temp === n - 1n) return true;
  let isPrime = false;
  for (let i = 1n; i < s; i++) {
    temp = power(a, power(2n, i) * t, n);
    if (temp === n - 1n) {
      isPrime = true;
      break;
    }
  }
  return isPrime;
}

export const testPrimality = (n: bigint , k: number): boolean => {
  n = BigInt(n);
  //-----------
  if (n === 2n) return true;
  if (n % 2n === 0n || n < 2n) return false;
  let t = (n - 1n) / 2n;
  let s = 1n;
  while (t % 2n === 0n) {
    t = t >> 1n;
    s++;
  }
  console.log(t, s);
  let isPrime = true;
  for (let i = 0; i < k; i++) {
    if (!millerRabin(BigInt(n), BigInt(t), BigInt(s))) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};
