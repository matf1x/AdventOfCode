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

let loopGrid = (): number => {
    let total = 0;
    let found: boolean[][] = [];
    for(let row = 0; row < grid.length; row++) {
        found.push([]);
        for(let col = 0; col < grid[0]!.length; col++) {
            const cell = grid[row]![col];
            if(cell === '@') {
                const totalNeighbors = countNeighbors(grid, row, col);
                if(totalNeighbors < 4) {
                    total++;
                    found[row]![col] = true;
                }
            }
        }
    }

    for(let row = 0; row < grid.length; row++) {
        let newRow = "";
        for(let col = 0; col < grid[0]!.length; col++) {
            newRow += (found[row]![col]) ? "X" : grid[row]![col];
        }
        grid[row] = newRow;
    }

    return total;
}

// First loop to get the first things removed
let removedRolls = loopGrid();
sum += removedRolls;

// Loop until we have no rolls left
while(removedRolls > 0) {
    removedRolls = loopGrid();
    sum += removedRolls;
}

// Return the total sum
console.log({ sum });