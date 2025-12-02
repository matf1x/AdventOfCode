import { readInput } from '../assets/utils.ts';
import { multiply } from './assets/utils.ts';

// Read the file
const input = await readInput('./sample-input.txt');
const memory = input.join();
const pattern = /mul\(\d{1,3}\,\d{1,3}\)/g;
const result = (memory.match(pattern) || []).reduce((s, o) => {
    return s + multiply(o);
}, 0);

console.log({ result });