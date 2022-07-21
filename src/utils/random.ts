export const randomBigInt = (min: number, max: number): bigint => {
  const minForFloor = min + 1;
  const base = Math.random();
  const num = Math.floor(base * (max - minForFloor) + minForFloor);
  return BigInt(num);
};
