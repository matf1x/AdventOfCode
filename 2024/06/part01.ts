import { readInput } from '../assets/utils.ts';

const grid = await readInput('./sample-input.txt');
const steps: number[] = [];
let startCol, startRow: number = 0;
const startChar = '^';

for(let i = 0; i < grid.length; i++) {
    const chars = grid[i].split('');
    chars.forEach((char: string, j: number) => {
        if(char === startChar) {
            startCol = i;
            startRow = j;
        }
    });
}



console.log({ startCol, startRow });