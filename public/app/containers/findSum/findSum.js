angular.module('App')
.component('findSumComp', {
  templateUrl: 'app/containers/findSum/findSum.html',
  controller: FindSumCompCtrl,
  controllerAs: 'findSumComp'
});

function FindSumCompCtrl(DataServices){

  var findSumComp = this;

  findSumComp.input = null;
  findSumComp.sum = null;

  findSumComp.calculate = function(){

    function addAll(array){
      var sum = null;
      for (i = 0; i < array.length; i++){
        sum = sum + array[i];
        }
      return sum;
    };

    findSumComp.sum = addAll(DataServices.stringToArray(findSumComp.input));
  }

}


FindSumCompCtrl.$inject = ['DataServices'];
