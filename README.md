# Sorting Algorithms

Popular sorting algorithms implementations in Typescript.

## Includes
- Bubble sort.
- Heap sort.
- Insertion sort.
- Merge sort.
- Quick sort.
  
More will be added later.

## How to run locally

- Install [Deno](https://deno.land)
- Clone this repo `git clone https://github.com/WinterCore/sorting-algos.git`
- Change your current working directory to the cloned repo `cd sorting-algos`
- Unlike Node you don't need to run `npm install` cuz Deno is cool 🙂
- To run a specific file `deno run --import-map=import_map.json src/<sorting_algorithm>.ts`
- To run the tests use the included script `./run_tests` or run `deno test --unstable --import-map=import_map.json --v8-flags=--stack-size=200000 src/*`