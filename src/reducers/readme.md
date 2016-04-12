When you are creating reducers, the goal is to write pure functions that 
do not mutate things

arrays:
to add to arrays use the concat method or es6 spread syntax combined with the new value to add

to remove from array use the splice and concat method to build a new array leaving out the part you don't want
you can also use the spread syntax to t
use the same technique to modify things in an array

add
return [...oldArray, new value]
remove 
return [
    ...oldArray.slice(0,index), 
    ...oldArray.slicke(index+1)    
]

modify
return[
    ...oldArray.slice(0,index),
    oldArray[index] + 1,
    ...oldArray.slic(index+1)
    
]



Ojbects can be dealt with by using Object.assign
this is a ES6 specific thing
so make sure that you use babel polyfill 
or the object spread operator from stage 2


How to modify an object that exists within an array of that type of object
call map on old array
check the each item matches the item you are looking for in whatever way
-- hopefully by id
if the id doesn't match just return the old item
if the id does match, return a new object using the Assign technique putting in the value you want changed