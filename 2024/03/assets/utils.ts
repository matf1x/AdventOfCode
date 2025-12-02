export function multiply(operation: string) {
    const [, a, b] = operation.match(/mul\((.*)\,(.*)\)/) || [];
    return Number(a) * Number(b);
}