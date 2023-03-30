# GENERAL NOTE  
---
## Time and space complexity  
*Space = memory usage; Time = number of primitive operations - with respect to input size and assuming worst case scenarios*  
## Big O  
*as your input grows how fast does computation or memory grow?*  

growth is with respect to input  

>## from fast to slow:  
>>**O(1)**-constant(static val always the same doesnt matter how your input grows)  
>>**O(logn)**-logarithmic(loop that cuts problem in half every iteration)  
>>**O(n)**-linear(i.e. find min and max numbers with two not nested loops: 2n)  
>>**O(n^2)**-quadratic(i.e. compare all numbers or double nested loop. N times nesting always ^n)  
>>**O(k^n)**-exponential  

*JS methods, expressions mini-note  

**predictables**  
- math, lookups, saving, running a statement, greater/less than are always *constant* ie. .pop(), arr[0], ect. 
- shift and unshift must move every element to a direction once, so they are *linear*, also a simple loop like for loop  
- nlogn for sort, but more details later  
---
# THE PRACTICAL WAY  
*below every task has some tries before the optimalized solution, the point is: the first ones always created as I check the task and tring to solve it asap this way I can make logical connections easier*  

# task 1 in index.js is about solve a task in O(n) insted of O(n^2)  

>In terms of performance, the second approach ("caching approach") using caching should be more performant than the first approach ("my first thought"). This is because:  
>>- the first approach iterates over the entire array *`for each (!)` element to check whether it is already in the sorted array or not, which leads to an `O(n^2)` time complexity*.  
>>- On the other hand, the second approach uses a hash table to cache the elements as they are encountered, which provides *constant-time lookup for each element and reduces the time complexity to `O(n)`*.  
>>- In addition to the improved time complexity, the second approach also reduces the memory usage by `only storing unique elements in the result array`, whereas the first approach creates a new array for each element and then sorts the entire array.  
>Therefore, it is generally recommended to use a `hash table` or `caching approach` for unique sorting when dealing with large arrays to optimize performance and memory usage.  

**CACHING is always a tradeoff in favor of time complexity against space complexity**  

# task 2 in index.js is about caching  

>About "first try": first mistake was to do anything before `if statement!` furthermore it uses a `global(or modular) scope` cache obj and mutates that. Later I also divided this whole accomplishment to more fn than just do everything in one.  
>Important that I placed the whole context into a closure. You pass the arg to the return fn at invoke, this way I can use caching without rerendering it. 

