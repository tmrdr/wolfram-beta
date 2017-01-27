angular.module('App')
.component('smallestIntComp', {
  templateUrl: 'app/containers/smallestInt/smallestInt.html',
  controller: smallestIntCompCtrl,
  controllerAs: 'smallestIntComp'
});

function smallestIntCompCtrl(DataServices){
  $("input").focus();

  var smallestIntComp = this;
  smallestIntComp.input = "3 5 7 9";
  smallestIntComp.answer = null;

  smallestIntComp.calculate = function(){

    function smallestInt(array){
      var smallest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] < smallest){
          smallest = array[i];
        }
      }
      return smallest;
    };


    smallestIntComp.answer = smallestInt(DataServices.stringToArray(smallestIntComp.input));
  }

  smallestIntComp.calculate();

}


smallestIntCompCtrl.$inject = ['DataServices'];
