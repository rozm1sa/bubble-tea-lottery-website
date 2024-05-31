function removeDuplicatesAndPrimes(arr) {
    var sortedArray = [];
    for(var i = 0; i < arr.length; i++) {
        var flag = 1;
  
      for(var j = 2; j < arr[i]; j++) {
          if(arr[i] % j == 0) {
            flag = 0;
            break;
         }
      }
        if(flag == 1) {
        if(sortedArray.indexOf(arr[i])==-1) {
            sortedArray.push(arr[i]);
        }
    }
  }
  sortedArray.sort(function(a, b) {
    return a - b;
  });
  return sortedArray;
}

//  Example usage:
console.log(removeDuplicateAndPrimes([4, 6, 2, 3, 3, 4, 5]));
//  The output is [2, 5]