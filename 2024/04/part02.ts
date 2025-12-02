import { readInput } from '../assets/utils.ts';
import { crossWord } from './assets/utils.ts';

const grid = await readInput('./input.txt');
const rows = grid.length;
const cols = grid[0]!.length;
let wordCount = 0;

for(let col = 0; col < cols; col++) {
    for(let row = 0; row < rows; row++) {
        const letter = grid[row]![col];
        if(letter === "A") {
            if(crossWord(grid, row, col)) wordCount++;
        }
    }
}

console.log({ wordCount });