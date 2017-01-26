// functions to implement



// NUMBERS

// return the largest number in an array
function largestNumber(array){
  var largest = array[0];
  for (i = 0; i < array.length; i++){
    if (array[i] > largest){
      largest = array[i];
    }
  }
  return largest;
};


// return the smallest number in an array
function smallestNumber(array){
  var smallest = array[0];
  for (i = 0; i < array.length; i++){
    if (array[i] < smallest){
      smallest = array[i];
    }
  }
  return smallest;
};


// add every number in an array
function addAll(array){
  var sum = null;
  for (i = 0; i < array.length; i++){
    sum = sum + array[i];
    }
  return sum;
};

// factorialize a number.
function factorialize(num) {
var array = [];
if(num === 0){
   return 0;
 }
 for (i = 0; i < num; i){
     array.push(num);
    num--;
  }
answer = array.reduce(function(previousVal, currentVal){
    return previousVal * currentVal;
});
return answer;
};


// 
