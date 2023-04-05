// TASK 1 

    // transform simple sorting algorythm to unique sort - it shd not return any duplicate val as output ie. input [1,1,1,12,,3,33,3] => [1,3,12,33];

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
        return console.log("**TASK1** Sorted", result)
    }
    // const testArray = [1,1,7,7,7,1,3,7,4,1,1,1,1,0];
    // uniqueSort(testArray);

// TASK 2

    // fn takes arg n and returns n^10. use and obj to cache the results, check if n was calc before, if not save it to cache.

    // first try 
    // const squareTenCache = {};
    // function squareTen(num) {
    //     let counter = num;
    //     for (let index = 1; index < 10; index++) {
    //       counter *= num;
    //     }
    //     if (!squareTenCache[num]) {
    //       squareTenCache[num] = counter;
    //       return console.log("**TASK2** squareten", counter, squareTenCache);
    //     }
    // }
    // squareTen(2);
    // squareTen(2);
    // squareTen(3);
    // squareTen(4);
    // squareTen(4);
    // squareTen(4);
    function square(num) {
        let counter = num;
        for (let index = 1; index < 10; index++) {
            counter *= num;
        }
        return counter;
    }
    const cacheCalc = (calculator) => {
        const squareTenCache = {};
        // return fn will handle arguments passed to calc
        return function(number) {
            if (squareTenCache[number]) return console.log("already cached:", squareTenCache[number]); // only a constant pick
            let calc = calculator(number);
            squareTenCache[number] = calc;
            return console.log(calc, squareTenCache)
        }
    }
    // const memoSquare = cacheCalc(square);
    // memoSquare(2);
    // memoSquare(2);
    // memoSquare(3);
    // memoSquare(4);
    // memoSquare(4);
    // memoSquare(4);

// TASK 3

    // transformin iteration to recursion

    // function joinElems(array, join) {
    //     let res = '';
    //     for (let idx = 0; idx < array.length - 1; idx++) {
    //         res += array[idx] + join;      
    //     }
    //     return console.log(res)
    // }
    function joinElems(array, join) {
        let res = '';
        function recur(idx, ret){
            ret += array[idx];
            if (idx === array.length - 1) return res = ret;
            recur(idx + 1, ret + join);
        }
        recur(0, '');
        // console.log(res); //return
    }
    // joinElems(['s','cr','t cod','%'], 'e');

// TASK 4

    // function binarySerach(list, item) {
    //     let low = 0;
    //     let high = list.length - 1;
    //     while (low <= high) {
    //         const mid = Math.floor((low + high) / 2);
    //         const guess = list[mid];
    //         if (guess === item) return console.log(mid);
    //         if (guess > item) high = mid - 1;
    //         else low = mid + 1;
    //     }
    //     return console.log("not found")
    // }

    // binarySerach([1,2,3,4,5,6,7,8,9,10], 6);

    function qs(list, low, hi){
      if (low >= hi) return;
      
    }
    function partition(list, low, hi){
      const pivot = list[hi];
      let idx = low - 1;
      for(i = low; i<hi; i++) {
        if (list[i] <= pivot) {
          idx++;
          const tmp = list[i];
          list[i] = list[idx];
          list[idx] = tmp;
        }
      }
      idx++;
      list[hi] = list[idx];
      list[idx] = pivot;
    }
