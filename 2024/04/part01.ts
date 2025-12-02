import { readInput } from '../assets/utils.ts';
import { checkWord } from './assets/utils.ts';

const grid = await readInput('./sample-input.txt');
const rows = grid.length;
const cols = grid[0]!.length;
let wordCount = 0;

for(let col = 0; col < cols; col++) {
    for(let row = 0; row < rows; row++) {
        const letter = grid[row]![col];
        if(letter === "X") {
            if(checkWord(grid, row, col, 'forwards')) wordCount++;
            if(checkWord(grid, row, col, 'backwards')) wordCount++;
            if(checkWord(grid, row, col, 'downwards')) wordCount++;
            if(checkWord(grid, row, col, 'upwards')) wordCount++;
            if(checkWord(grid, row, col, 'diagonaldownright')) wordCount++;
            if(checkWord(grid, row, col, 'diagonaldownleft')) wordCount++;
            if(checkWord(grid, row, col, 'diagonalupleft')) wordCount++;
            if(checkWord(grid, row, col, 'diagonalupright')) wordCount++;
        }
    }
}

console.log({ wordCount });