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


// merge and sort two arrays seperated by comma
function merge(a1, a2) {
  var i1 = 0;
  var i2 = 0;
  var results = [];

  while (i1 < a1.length && i2 < a2.length) {
    if (a1[i1] < a2[i2]) {
      results.push(a1[i1]);
      i1++;
    } else {
      results.push(a2[i2]);
      i2++;
    }
  }
  while (i1 < a1.length) {
    results.push(a1[i1]);
    i1++;
  }
  while (i2 < a2.length) {
    results.push(a2[i2]);
    i2++;
  }
  return results;
}


// reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}
