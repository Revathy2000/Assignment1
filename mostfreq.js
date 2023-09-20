// Write a JavaScript program to find the most frequent item of an array

let arr = [1,2,4,3,2,1,3,3,4,3,2,1,3]
function mostfreq(arr,n){
let maxcount = 0;
let maxfreq;
for(let i = 0; i < n; i++){
  let count = 0;
  for(let j = 0; j < n; j++){
    if(arr[i]==arr[j])
      count++;
  }
    if(count > maxcount){
      maxcount = count;
      maxfreq = arr[i];
  }
}
  return maxfreq;
}
let n = arr.length;
console.log(mostfreq(arr,n));