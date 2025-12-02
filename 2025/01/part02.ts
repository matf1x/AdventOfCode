import fs from 'fs/promises';

const input = await fs.readFile('./input.txt', 'utf-8');

const STARTPOS = 50;
const MINPOS = 0;
const MAXPOS = 100;

/**
 * This will check how many times we hit 0 and will return the correct solution
 * @param input A string Array with the values
 */
function partOne(input: string[]) {
    let current = STARTPOS;
    let password = 0;

    input.forEach((rotation) => {
        const direction = rotation.slice(0, 1);
        const rotations = Number(rotation.slice(1));

        if(direction === "R") {
            const next = current + rotations;
            current = next % MAXPOS;
            if(next > 99) {
                const hitsZeroCounter = Math.floor(next / MAXPOS);
                password += hitsZeroCounter;
            }
        } else if(direction === 'L') {
            const next = current - rotations;
            const start = current;
            current = next % MAXPOS;
            if(current < 0) {
                current = MAXPOS + current;
            }
            if(current === 0) {
                password += 1;
            }
            if(next < 0) {
                let hitsZeroCounter = Math.ceil(Math.abs(next / MAXPOS));
                hitsZeroCounter -= (start === 0) ? 1 : 0;
                password += hitsZeroCounter;
            }
        }
    });

    console.log({password});
}

partOne(input.split("\n"));
