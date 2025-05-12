/* 
Note: This kata is a translation of this (Java) one: http://www.codewars.com/kata/rotate-array. I have not translated this first one as usual because I did not solved it, and I fear not being able to solve it (Java is not my cup of... tea). @cjmcgraw, if you want to use my translation on your kata feel free to use it.

Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.
 */

function rotate(array,n){
  const rotate = Math.abs(n) % array.length
  
  let itemsToMove = n > 0 ? array.slice(array.length - rotate) : array.slice(0, rotate)
  let itemsRemaining = n > 0 ? array.slice(0, array.length - itemsToMove.length) : array.slice(rotate)
  
  return n > 0 ? [...itemsToMove, ...itemsRemaining] : [...itemsRemaining, ...itemsToMove]
}

// Other solutions:
function rotate(array,n){
  const rotate = Math.abs(n) % array.length
  return n > 0 ? [...array.slice(-rotate), ...array.slice(0, -rotate)] : [...array.slice(rotate), ...array.slice(0, rotate)]
}