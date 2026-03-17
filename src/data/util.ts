export const makeArray = (length: number) => new Array(length).fill(null);
export const range = (min: number, max: number): number[] =>
    makeArray(max - min).map((notUsed, index) => index + min);