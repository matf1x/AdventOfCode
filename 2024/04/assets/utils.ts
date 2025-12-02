export function checkWord(grid: string[], startRow: number, startCol: number, rotation: string) {
    const row = grid[startRow];
    if(rotation === 'forwards') return row?.slice(startCol).startsWith("XMAS");
    if(rotation === 'backwards') return row?.slice(0, startCol + 1).endsWith("SAMX");
    if(rotation === 'downwards') {
        let word = 'X';
        for(let row = startRow + 1; row <= startRow + 3 && row <= grid.length - 1; row++) {
            word += grid[row]![startCol];
        }
        return word === 'XMAS';
    };
    if(rotation === 'upwards') {
        let word = 'X';
        for(let row = startRow - 1; row >= startRow - 3 && row >= 0; row--) {
            word += grid[row]![startCol];
        }
        return word === 'XMAS';
    };
    if(rotation === 'diagonaldownright') {
        const cols = grid[0]!.length;
        let word = 'X';
        
        let currentRow = startRow + 1;
        let currentCol = startCol + 1;

        for(let i = 0; i < 3; i++) {
            if(currentRow >= grid.length || currentCol >= cols) {
                break;
            }
            word += grid[currentRow]![currentCol];
            currentRow++;
            currentCol++;
        }

        return word === 'XMAS';
    };
    if(rotation === 'diagonaldownleft') {
        let word = 'X';
        
        let currentRow = startRow + 1;
        let currentCol = startCol - 1;

        for(let i = 0; i < 3; i++) {
            if(currentRow >= grid.length || currentCol < 0) {
                break;
            }
            word += grid[currentRow]![currentCol];
            currentRow++;
            currentCol--;
        }

        return word === 'XMAS';
    };
    if(rotation === 'diagonalupleft') {
        let word = 'X';
        
        let currentRow = startRow - 1;
        let currentCol = startCol - 1;

        for(let i = 0; i < 3; i++) {
            if(currentRow < 0 || currentCol < 0) {
                break;
            }
            word += grid[currentRow]![currentCol];
            currentRow--;
            currentCol--;
        }

        return word === 'XMAS';
    };
    if(rotation === 'diagonalupright') {
        const cols = grid[0]!.length;
        let word = 'X';
        
        let currentRow = startRow - 1;
        let currentCol = startCol + 1;

        for(let i = 0; i < 3; i++) {
            if(currentRow < 0 || currentCol >= cols) {
                break;
            }

            word += grid[currentRow]![currentCol];
            currentRow--;
            currentCol++;
        }

        return word === 'XMAS';
    };
}

export function crossWord(grid: string[], startRow: number, startCol: number) {

    try {
        if((grid[startRow-1]![startCol+1]! === "S" &&
            grid[startRow+1]![startCol+1]! === "S" &&
            grid[startRow-1]![startCol-1]! === "M" &&
            grid[startRow+1]![startCol-1]! === "M")) return true;

        if((grid[startRow-1]![startCol+1]! === "S" &&
            grid[startRow+1]![startCol+1]! === "M" &&
            grid[startRow-1]![startCol-1]! === "S" &&
            grid[startRow+1]![startCol-1]! === "M")) return true;

        if((grid[startRow-1]![startCol+1]! === "M" &&
            grid[startRow+1]![startCol+1]! === "S" &&
            grid[startRow-1]![startCol-1]! === "M" &&
            grid[startRow+1]![startCol-1]! === "S")) return true;

        if((grid[startRow-1]![startCol+1]! === "M" &&
            grid[startRow+1]![startCol+1]! === "M" &&
            grid[startRow-1]![startCol-1]! === "S" &&
            grid[startRow+1]![startCol-1]! === "S")) return true;
    } catch(error) {
        // Default return
        return false;
    }
}