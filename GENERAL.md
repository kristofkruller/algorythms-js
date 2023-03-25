### GENERAL NOTE 

## Time and space complexity  
*Space = memory usage; Time = number of primitive operations - with respect to input size and assuming worst case scenarios*  
# Big O  
*as your input grows how fast does computation or memory grow?*  

growth is with respect to input

># from fast to slow:  
>>**O(1)**-constant(static val always the same doesnt matter how your input grows)  
>>**O(logn)**-logarithmic(loop that cuts problem in half every iteration)  
>>**O(n)**-linear(i.e. find min and max numbers with two not nested loops: 2n)  
>>**O(n^2)**-quadratic(i.e. compare all numbers or double nested loop. N times nesting always ^n)  
>>**O(k^n)**-exponential  

## JS methods, expressions

**predictables**  
- math, lookups, saving, running a statement, greater/less than are always *constant* .pop(), arr[0], ect. 
- shift and unshift must move every element to a direction once, so they are *linear*, also a simple loop like for loop  
- nlogn for sort, but more details later
- if you have a callback to consider it can *depend on* callback forEach, reduce  


