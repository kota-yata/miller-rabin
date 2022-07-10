export const randomInt = (min: number, max: number): number => {
  const minForFloor = min + 1;
  const base = Math.random();
  const num = Math.floor(base * (max - minForFloor) + minForFloor);
  return num;
};
