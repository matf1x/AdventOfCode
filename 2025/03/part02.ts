import fs from 'fs/promises';

const input = await fs.readFile('./input.txt', 'utf-8');
const rows = input.split("\n");
let sum = 0;

rows.forEach((row) => {
    const chars = [...row].map(Number);

    let numbers = [];
    let index = 0;
    for(let numbersLeft = 11; numbersLeft >= 0; numbersLeft--) {
        const [ idx, nmr ] = findLargest(chars, numbersLeft, index);
        index = idx!;
        numbers.push(nmr);
    }
    const result = Number(numbers.join(""));
    sum += result;
});

function findLargest(chars: number[], numbersleft: number, index: number) {
    let idx = 0;
    let largest = 0;
    for(let i = index; i < chars.length - numbersleft; i++) {
        if(chars[i]! > largest) {
            largest = chars[i]!;
            idx = i + 1;
        }
    }
    return [idx, largest];
}

console.log({ sum });