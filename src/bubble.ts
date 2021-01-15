import { sortTest } from "./utils.ts";

const bubble = (rawArr: number[]): number[] => {
    const arr = [...rawArr];
    for (let i = 0; i < arr.length; i += 1) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
};

sortTest("Bubble sort", bubble);

export default bubble;
