import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');
const rows = input.split("\n");
const numbers: number[][] = [];
let sum: number = 0;

// get the operators
const ops = rows[rows.length-1]!.split(" ");
ops!.map(item => {
    return item != null && item != '';
});
const operators = ops!.filter(Boolean);

// Loop over all the rows
for(let i = 0; i < rows.length - 1; i++) {
    const arch = rows[i]!.split(" ");
    arch!.map(item => {
        return item != null && item != '';
    });
    const nmrs = arch!.filter(Boolean).map(Number);
    nmrs.forEach((v: number, j: number) => {
        if (!numbers[j]) numbers[j] = [];
        numbers[j][i] = v;
    });
}

numbers.forEach((row, i) => {
    let result: number = 0;
    if(operators[i] === '+') {
        result = row.reduce((a, b) => a + b, 0);
    }
    if(operators[i] === '*') {
        result = row.reduce((a, b) => a * b, 1);
    }
    sum += result;
})

console.log({ sum });