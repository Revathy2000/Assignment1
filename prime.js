// Write a JavaScript function to get an array and to read the first element of an array. 
// Check whether it is prime or not. 

const arr = [13,14,15,16,17];
function Prime(num){
  if (num <= 1) 
      return false;
  if (num <= 3) 
      return true;
  if (num % 2 === 0 || num % 3 === 0) 
      return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) 
      return false;
    i += 6;
  }
  return true;
}

function firstelement(arr) {
  if (arr.length === 0) 
      return false;
  return Prime(arr[0]);
}
const FirstPrime = firstelement(arr);
console.log(`Is the first element prime? ${FirstPrime}`);



