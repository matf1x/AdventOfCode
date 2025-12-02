import { readInput } from '../assets/utils.ts';
import { isSafe } from './assets/utils.ts';

const input = await readInput('./sample-input.txt');

let safeReports = input.filter((line) => {

    const values = line.split(" ").map((v) => Number(v));

    return isSafe(values) || values.some((_, i) => {
        return isSafe(values.toSpliced(i, 1));
    });

}).length;

console.log({ safeReports });