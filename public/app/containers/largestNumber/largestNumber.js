angular.module('App')
.component('largestNumberComp', {
  templateUrl: 'app/containers/largestNumber/largestNumber.html',
  controller: LargestNumberCompCtrl,
  controllerAs: 'largestNumberComp'
});

function LargestNumberCompCtrl(DataServices){

  var largestNumberComp = this;

  largestNumberComp.input = null;
  largestNumberComp.sum = null;

  largestNumberComp.calculate = function(){

    function largestNumber(array){
      var largest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] > largest){
          largest = array[i];
        }
      }
      return largest;
    };

    largestNumberComp.sum = largestNumber(DataServices.stringToArray(largestNumberComp.input));
  }

}


LargestNumberCompCtrl.$inject = ['DataServices'];
