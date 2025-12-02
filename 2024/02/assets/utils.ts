export function isSafe(values: number[]) {
    const current = values[0];
    const next = values[1];

    // Get the difference between the 2 numbers
    let difference = current! - next!;

    // Check if we are increasing or decreasing
    const increasing = difference < 0;
    
    // Get the absolute value of the difference
    difference = Math.abs(difference);

    // If the difference is 0 or higher than 3, we return false because this is not a safe report
    if(!(difference > 0 && difference <= 3)) return false;

    // Check the other values from the line
    for(let i = 1; i < values.length -1; i++) {

        // Get the current & next value
        const current = values[i];
        const next = values[i + 1];

        // Get the difference between the 2 numbers
        let difference = current! - next!;

        // Check if we are increasing or decreasing
        const currentIncreasing = difference < 0;

        // Check if the previous status is the same as we already had
        if(currentIncreasing !== increasing) return false;

        // Get the absolute value of the difference
        difference = Math.abs(difference);

        // If the difference is 0 or higher than 3, we return false because this is not a safe report
        if(!(difference > 0 && difference <= 3)) return false;

    }

    // Return true mark it as safe
    return true;
}