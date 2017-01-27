angular.module('App')
.component('largestNumberComp', {
  templateUrl: 'app/containers/largestNumber/largestNumber.html',
  controller: LargestNumberCompCtrl,
  controllerAs: 'largestNumberComp'
});

function LargestNumberCompCtrl(){

  var largestNumberComp = this;
  largestNumberComp.input = null;
  largestNumberComp.sum = null;

  largestNumberComp.calculate = function(){
    console.log("hello");
    var array = largestNumberComp.input.split(" ").map(function(item){
      return parseInt(item);
    })
    var newArray = [];
    array.forEach(function(item){
      if(isNaN(item)){
        //do nothing
      } else{
        newArray.push(item);
      }
    })

    function largestNumber(array){
      var largest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] > largest){
          largest = array[i];
        }
      }
      return largest;
    };


    largestNumberComp.sum = largestNumber(newArray);
  }

}


LargestNumberCompCtrl.$inject = [];
