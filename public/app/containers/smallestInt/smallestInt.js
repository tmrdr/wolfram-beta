angular.module('App')
.component('smallestIntComp', {
  templateUrl: 'app/containers/smallestInt/smallestInt.html',
  controller: smallestIntCompCtrl,
  controllerAs: 'smallestIntComp'
});

function smallestIntCompCtrl(){

  var smallestIntComp = this;
  smallestIntComp.input = "3 5 7 9";
  smallestIntComp.answer = null;

  smallestIntComp.calculate = function(){

    var array = smallestIntComp.input.split(" ").map(function(item){
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

    function smallestInt(array){
      var smallest = array[0];
      for (i = 0; i < array.length; i++){
        if (array[i] < smallest){
          smallest = array[i];
        }
      }
      return smallest;
    };


    smallestIntComp.answer = smallestInt(newArray);
  }

}


smallestIntCompCtrl.$inject = [];
