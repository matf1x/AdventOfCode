import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');
const rows = input.split("\n");

// SETUP
let sum: number = 0;
let problems = [];

const line0 = rows[0] ?? "";
for (let col = line0.length - 1; col >= 0; col--) {
    let thisDigit = '';
    for (let row = 0; row < rows.length-1; row++) {
        const line = rows[row] ?? '';
        let char = line.charAt(col);
        if (char === ' ') char = '';
        thisDigit = `${thisDigit}${char}`;
    }
    problems.push(thisDigit);

    const lastLine = rows[rows.length-1];
    const operator = lastLine?.charAt(col);
    if (operator === '*' || operator === '+') {
        let startNumber: number = operator === "*" ? 1 : 0;
        startNumber = problems.reduce((prev, current) => {
            if(operator === '*') {
                return prev * +current;
            } else {
                return prev + +current;
            }
        }, startNumber);
        sum += startNumber;
        problems = [];
        col--;
    }

}

// Return the sum
console.log({ sum });