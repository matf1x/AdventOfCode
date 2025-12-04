import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');
const grid = input.split("\n");
let sum: number = 0;

const countNeighbors = (grid: string[], row: number, col: number): number => {
    return [
        grid[row-1]?.[col-1],
        grid[row-1]?.[col],
        grid[row-1]?.[col+1],
        grid[row]?.[col-1],
        grid[row]?.[col+1],
        grid[row+1]?.[col-1],
        grid[row+1]?.[col],
        grid[row+1]?.[col+1]
    ].reduce((sum, neighbor) => neighbor == '@' ? sum + 1 : sum, 0);
}

for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0]!.length; col++) {
        const cell = grid[row]![col];
        if(cell === '@') {
            // Do the code
            const totalNeighbors = countNeighbors(grid, row, col);
            if(totalNeighbors < 4) {
                sum += 1;
            }
        }
    }
}

console.log({ sum });