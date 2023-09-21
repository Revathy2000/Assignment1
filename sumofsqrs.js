// Write a JavaScript program to find the sum of squares of the elements of an array.

const num = [1,2,3,4,5]
function sumofsquares(arr){
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    sum += arr[i] * arr[i]
  }
  return sum;
}
console.log(sumofsquares(num));