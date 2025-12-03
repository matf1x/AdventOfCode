import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');
const rows = input.split("\n");
let sum = 0;

rows.forEach((row) => {
    const chars = [...row].map(Number);
    let highestNumber = 0;
    let highestNumberIndex = 0;
    chars.forEach((c, i) => {
        if(c > highestNumber && i < chars.length - 1) {
            highestNumber = c;
            highestNumberIndex = i;
        }
    });

    let secondHighestNumber = 0;
    for(let i = highestNumberIndex + 1; i < chars.length; i++) {
        secondHighestNumber = (chars[i]! > secondHighestNumber) ? chars[i]! : secondHighestNumber;
    }

    const combined = Number(`${highestNumber}${secondHighestNumber}`);

    sum += combined;

})

console.log({ sum });