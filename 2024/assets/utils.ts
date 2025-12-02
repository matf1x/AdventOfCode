import fs from 'fs/promises';

/**
 * Read a specified input and return an array with the lines
 * @param path The path where the file can be found
 * @returns The file with splitted lines
 */
export async function readInput(path: string) {
    const file = await fs.readFile(path, 'utf-8');
    return file.trim().split("\n");
}