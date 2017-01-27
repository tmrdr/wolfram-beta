angular.module('App')
.component('smallestNumberComp', {
  templateUrl: 'app/containers/smallestNumber/smallestNumber.html',
  controller: SmallestNumberCompCtrl,
  controllerAs: 'smallestNumberComp'
});

function SmallestNumberCompCtrl(){

  var smallestNumberComp = this;
  smallestNumberComp.input = null;
  smallestNumberComp.answer = null;

  smallestNumberComp.calculate = function(){

    var array = smallestNumberComp.input.split(" ").map(function(item){
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

    function smallestNumber(array){
      var smallest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] < smallest){
          smallest = array[i];
        }
      }
      return smallest;
    };


    smallestNumberComp.answer = smallestNumber(newArray);
  }

}


SmallestNumberCompCtrl.$inject = [];
