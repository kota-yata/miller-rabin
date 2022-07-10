export const randomInt = (min, max) => {
    const minForFloor = min + 1;
    const base = Math.random();
    const num = Math.floor(base * (max - minForFloor) + minForFloor);
    return num;
};
