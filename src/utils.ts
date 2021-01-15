import { assertEquals } from "testing/asserts.ts";
import Random from "random/Random.js";

const r = new Random();

export const generateArray =
    (length: number): number[] => Array.from({ length }).map(() => r.int(0, 1E5));

export const sorter = (a: number, b: number) => a - b;


// The array is generated outside to keep the values consistent across all test
const arr = generateArray(50000);

Deno.test("Javascript's default sort implementation", () => {

    const before = performance.now();

    [...arr].sort();

    const time = performance.now() - before;

    console.log(`Took ${time}ms`);
});

export const sortTest = (name: string, fn: (arr: number[]) => number[]) => {
    Deno.test(name, () => {
        const before = performance.now();

        const sorted = fn(arr);

        const time = performance.now() - before;

        assertEquals(sorted, [...arr].sort(sorter));

        console.log(`Took ${time}ms`);
    });
};
