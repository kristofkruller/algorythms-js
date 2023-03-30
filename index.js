// TASK 1 

    // transform simple sorting algorythm to unique sort - it shd not return any duplicate val as output ie. input [1,1,1,12,,3,33,3] => [1,3,12,33];
    const test = [1,1,7,7,7,1,3,7,4,1,1,1,1,0];

    // my first thought:
    // const uniqueSort = (input) => {
    //     const toSort = [input[0]];
    //     for (let i = 1; i < input.length; i++) { // start at index 1 - 0 can never be duplicate
    //         const num = input[i];
    //         if (!toSort.includes(num)) toSort.push(num); 
    //     }
    //     toSort.sort((a, b) => a - b);
    //     return console.log("sorted", toSort);
    // }

    //with caching approach: 
    const uniqueSort = (input) => {
        const cache = {}; // this is caching but NOT MEMOIZATION because memoize = caching the val that the fn will return
        const result = [];
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            if (!cache[element]) { // reverse bool
                result.push(element);
                cache[element] = true; // this will make ie. {2 : true} if element is 2
            }
        }
        result.sort((a,b) => a - b);
        console.log("**TASK1** Sorted", result)
    }

    uniqueSort(test);

// TASK 2

    // fn takes arg n and returns n^10. use and obj to cache the results, check if n was calc before, if not save it to cache.

