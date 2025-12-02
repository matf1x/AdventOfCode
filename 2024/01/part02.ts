import { readInput } from '../assets/utils.ts';

// Read the file
const input = await readInput('./sample-input.txt');

// Setup arrays to hold the numbers
const left: number[] = [];
const right: number[] = [];
let total = 0;

// Loop over the lines
input.forEach((line) => {
    const [l, r] = line.split('   ');
    left.push(Number(l));
    right.push(Number(r));
});

left.forEach((l) => {
    let amount = 0;
    right.forEach((r) => (l === r && amount++));
    total += l * amount;
});

console.log({ total });