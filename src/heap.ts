import { sortTest } from "./utils.ts";

class MinHeap {
    private struct: number[] = [];

    constructor(arr: number[] = []) {
        this.build(arr);
    }

    public get size() {
        return this.struct.length;
    }

    public build(arr: number[]): void {
        this.struct = [];
        for (let item of arr) {
            this.struct.push(item);
            this.reverseHeapify(this.size - 1);
        }
    }

    private reverseHeapify(i: number) {
        if (i <= 0) return;

        const p = Math.floor((i - 1) / 2);

        if (this.struct[p] > this.struct[i]) {
            [this.struct[p], this.struct[i]] = [this.struct[i], this.struct[p]];
            this.reverseHeapify(p);
        }
    }

    public peak(): number {
        if (this.empty()) throw new Error("The heap is empty!");
        return this.struct[0];
    }

    public pop(): number {
        const val = this.peak();
        this.struct[0] = this.struct[this.size - 1];
        this.struct.pop();
        this.heapify(0);
        return val;
    }

    public empty(): boolean {
        return this.size === 0;
    }

    private heapify(i: number): void {
        const l = i * 2 + 1;
        const r = i * 2 + 2;
        let sst = i;
        const length = this.size;

        if (l < length && this.struct[l] < this.struct[sst]) sst = l;
        if (r < length && this.struct[r] < this.struct[sst]) sst = r;


        if (sst !== i) {
            [this.struct[i], this.struct[sst]] = [this.struct[sst], this.struct[i]];
            this.heapify(sst);
        }
    }
}

const heapsort = (rawArr: number[]): number[] => {
    const arr = [...rawArr];
    const heap = new MinHeap(arr);
    const result = []
    while (!heap.empty()) result.push(heap.pop());

    return result;
};


sortTest("Heap sort",  heapsort);

export default heapsort;
