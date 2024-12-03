
const arr = [1, 0, 3, 0, -5, 0, 2];

let counter = 0;

arr.forEach(num => num === 0 && counter++);

console.log(`Number of zeros in the array: ${counter}`);
