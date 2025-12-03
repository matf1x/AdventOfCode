import fs from 'fs/promises';

const input = await fs.readFile('./sample-input.txt', 'utf-8');

const STARTPOS = 50;
const MINPOS = 0;
const MAXPOS = 100;

/**
 * This will check how many times we hit exactly 0 and will return the correct solution
 * @param input A string Array with the values
 */
function partOne(input: string[]) {
    let current = STARTPOS;
    let password = 0;

    input.forEach((rotation) => {
        const direction = rotation.slice(0, 1);
        const rotations = Number(rotation.slice(1));

        if(direction === "R") {
            current = (current + rotations) % MAXPOS;
        } else if(direction === 'L') {
            current = (current - rotations) % MAXPOS;
            if(current < 0) {
                current = MAXPOS + current;
            }
        }
        password += (current === 0) ? 1 : 0;
    });

    console.log({password});
}

partOne(input.split("\n"));
