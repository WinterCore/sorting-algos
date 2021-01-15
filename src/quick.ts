import { sortTest } from "./utils.ts";

const partition = (arr: number[], start: number, end: number): number => {
    let i = start;
    let j = start;

    while (i < end) {
        if (arr[i] < arr[end]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j += 1;
        }
        i += 1;
    }
    [arr[j], arr[i]] = [arr[end], arr[j]];

    return j;
};

const quicksortHelper = (arr: number[], start: number = 0, end: number = arr.length - 1): void => {
    if (start >= end) return;

    const p  = partition(arr, start, end);

    quicksortHelper(arr, start, p - 1);
    quicksortHelper(arr, p + 1, end);
};

const quicksort = (rawArr: number[]): number[] => {
    const arr = [...rawArr];

    quicksortHelper(arr);
    return arr;
};


sortTest("Quicksort sort", quicksort);

export default quicksort;
