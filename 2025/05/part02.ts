import fs from 'fs/promises';

const input = await fs.readFile('./simple-input.txt', 'utf-8');
const [r, i] = input.split("\n\n");
const ranges: { start: number; end: number }[] = r?.split('\n').map(line => {
    const [start, end]: number[] = line.split('-').map(Number) || [];
    return { start, end };
}) || [];

const getValidIds = (range: { start: number; end: number }[]) => {
    // Track number of id's
    let total = 0;

    // Sort list of ranges
    range.sort((a, b) => a.start - b.start);

    // Setup helpers
    let rangeStart = range[0]?.start;
    let rangeEnd = range[0]?.start;

    // Check each range
    for(let x = 0; x < range.length; x++) {
        let curr = range[x];
        if(curr!.end > rangeEnd!) {
            if(curr!.start <= rangeEnd!) {
                rangeEnd = curr?.end;
            } else {
                total += (rangeEnd! - rangeStart!) + 1;
                rangeStart = curr?.start;
                rangeEnd = curr?.end;
            }
        }
    }

    total += (rangeEnd! - rangeStart!) + 1;
    return total;
}

const total = getValidIds(ranges);

console.log({ total });