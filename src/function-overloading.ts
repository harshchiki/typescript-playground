export function formatInput(input: string): string; // Overload 1. This function takes a string and returns a string. The definition is below.

export function formatInput(input: number): string; // Overload 2. This function takes a number and returns a string. The definition is below.

export function formatInput(input: any): string { // Implementation. This function takes any input and returns a string.
    if (typeof input === "string") return input.toUpperCase();
    if (typeof input === "number") return input.toFixed(2);
    return input;
}