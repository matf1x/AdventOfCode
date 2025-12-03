import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');

function isInvalidId(value: Number): boolean {
    const valueString = value.toString();
    const left = valueString.slice(0, valueString.length / 2);
    const right = valueString.slice(valueString.length / 2);
    return left === right;
}

function getResult(ranges: string[]) {
    // Create array for the invalid ID's
    let invalidIds: number[] = [];

    // Loop over all the ranges
    ranges.forEach((range) => {
        const [start, end] = range.split('-').map(Number);
        for(let i = start!; i <= end!; i++) {
            if(isInvalidId(i)) invalidIds.push(i);
        }
    });

    // Count up the invalid IDs
    const result = invalidIds.reduce((s, v) => s + v);
    console.log({ result });
}

getResult(input.split(','));