import fs from 'fs/promises';

// Init
const file = await fs.readFile('./sample-input.txt', 'utf-8');
let [rulesStr, updatesStr] = file.trim().split("\n\n");
const rules = rulesStr?.split("\n").map((x) => x.split("|").map(Number));
const updates = updatesStr?.split("\n").map((x) => x.split(",").map(Number));

/**
 * Generate the rules map
 * @param rules A list with the rules
 * @returns The map
 */
let MakeMap = (rules: number[][]) => {
    let map: Record<number, number[]> = {};
    for(let i = 0; i < rules.length; i++) {
        let [key, value] = rules[i]!;
        if(key === undefined || value === undefined) break;
        if(!map[key]) {
            map[key] = [];
        }
        map[key].push(value);
    }
    return map;
}

let isUpdateValid = (rulesMap: Record<number, number[]>, updates: number[][]) => {
    let validUpdates: number[][] = [];
    updates.forEach((update) => {
        let isValid = false;
        for(let i = 0; i < update.length; i++) {
            let key: number = update[i]!;
            let values: number[] = rulesMap[key]!;
            if(values == null || values.length == 0) continue;
            isValid = values.every((value) => {
                return (
                    update.indexOf(value) == -1 || (update.indexOf(value) > -1 && update.indexOf(value) > i)
                );
            });
            if (!isValid) break;
        }
        if(isValid) {
            validUpdates.push(update);
        }
    });
    return validUpdates;
}

// Create the map
let rulesMap = MakeMap(rules!);
let validUpdates = isUpdateValid(rulesMap, updates!);

// Sum the numbers
let sum = 0;
validUpdates.forEach((update) => {
    sum += update[Math.floor(update.length / 2)]!;
});

// End result
console.log({ sum });