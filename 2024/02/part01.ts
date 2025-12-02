import { readInput } from '../assets/utils.ts';
import { isSafe } from './assets/utils.ts';

// Read the file
const input = await readInput('./sample-input.txt');

// Loop over lines
let safeReports = input.filter((line) => {

    // Get the first & second value
    const values = line.split(" ").map((v) => Number(v));

    // Check if the report is safe
    return isSafe(values);
}).length;

console.log({ safeReports });