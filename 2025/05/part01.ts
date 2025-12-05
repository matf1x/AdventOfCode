import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');
const [r, i] = input.split("\n\n");
const ranges: string[] = r?.split('\n') ?? [];
const ingredients: number[] = i?.split('\n').map(Number) ?? [];
const fresh: number[] = [];

ingredients.forEach((ingredient) => {
    for(let i = 0; i < ranges.length; i++) {
        const [start, end] = (ranges[i]?.split('-') ?? []).map(Number);
        if(ingredient >= start! && ingredient <= end!) {
            if(!fresh.includes(ingredient)) {
                fresh.push(ingredient);
            }
        }
    }
});

console.log({ freshLength: fresh.length });