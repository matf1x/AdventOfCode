import { readInput } from '../assets/utils.ts';

// Read the file
const input = await readInput('./sample-input.txt');

// Setup arrays to hold the numbers
const left: number[] = [];
const right: number[] = [];

// Loop over the lines
input.forEach((line) => {
    const [l, r] = line.split('   ');
    left.push(Number(l));
    right.push(Number(r));
});

// Sort from low to high
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

const result = left.map((l, i) => {
    const r = right[i];
    return Math.abs(l - r!);
}).reduce((s, v) => s + v, 0);

console.log({ result });