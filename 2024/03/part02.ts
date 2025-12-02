import { readInput } from '../assets/utils.ts';
import { multiply } from './assets/utils.ts';

// Read the file
const input = await readInput('./sample-input-2.txt');
const memory = input.join();
const pattern = /mul\(\d{1,3}\,\d{1,3}\)|do\(\)|don\'t\(\)/g;
const operations = (memory.match(pattern) || []);

let sum = 0;
let shouldExecute = true;

for(let i = 0; i < operations.length; i++) {
    const o = operations[i]!;
    if(o === "do()") { shouldExecute = true }
    else if(o === "don't()") { shouldExecute = false }
    else if(shouldExecute) { sum += multiply(o); }
}

console.log({ sum });