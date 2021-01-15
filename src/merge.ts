import { sortTest } from "./utils.ts";

const merge = (arr: number[], start: number, mid: number, end: number): void => {
    let i = start;
    let j = mid + 1;

    let result = [];

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            result.push(arr[i]);
            i += 1;
        } else {
            result.push(arr[j]);
            j += 1;
        }
    }

    while (i <= mid) result.push(arr[i++]);
    while (j <= end) result.push(arr[j++]);

    for (let i = start, j = 0; i <= end; i += 1, j += 1) arr[i] = result[j];
};

const mergesortHelper = (arr: number[], start: number = 0, end: number = arr.length - 1) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    mergesortHelper(arr, start, mid);
    mergesortHelper(arr, mid + 1, end);

    merge(arr, start, mid, end);
};

const mergesort = (rawArr: number[]) => {
    const arr = [...rawArr];

    mergesortHelper(arr);

    return arr;
};

sortTest("Merge Sort", mergesort);

export default mergesort;
