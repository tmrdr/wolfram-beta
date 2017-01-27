angular.module('App')
.component('findSumComp', {
  templateUrl: 'app/containers/findSum/findSum.html',
  controller: FindSumCompCtrl,
  controllerAs: 'findSumComp'
});

function FindSumCompCtrl(){

  var findSumComp = this;
  findSumComp.input = null;
  findSumComp.sum = null;

  findSumComp.calculate = function(){
    console.log("hello");
    var array = findSumComp.input.split(" ").map(function(item){
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

    function addAll(array){
      var sum = null;
      for (i = 0; i < array.length; i++){
        sum = sum + array[i];
        }
      return sum;
    };


    findSumComp.sum = addAll(newArray);
  }

}


FindSumCompCtrl.$inject = [];
