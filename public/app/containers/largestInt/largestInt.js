angular.module('App')
.component('largestIntComp', {
  templateUrl: 'app/containers/largestInt/largestInt.html',
  controller: largestIntCompCtrl,
  controllerAs: 'largestIntComp'
});

function largestIntCompCtrl(DataServices){

  var largestIntComp = this;

  largestIntComp.input = "4 19 29 0 35";
  largestIntComp.sum = null;

  largestIntComp.calculate = function(){

    function largestInt(array){
      var largest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] > largest){
          largest = array[i];
        }
      }
      return largest;
    };

    largestIntComp.sum = largestInt(DataServices.stringToArray(largestIntComp.input));
  }

}


largestIntCompCtrl.$inject = ['DataServices'];
