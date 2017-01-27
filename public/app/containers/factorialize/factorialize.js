angular.module('App')
.component('factorializeComp', {
  templateUrl: 'app/containers/factorialize/factorialize.html',
  controller: FactorializeCompCtrl,
  controllerAs: 'factorializeComp'
});

function FactorializeCompCtrl(){

  var factorializeComp = this;
  factorializeComp.input = null;
  factorializeComp.sum = null;

  factorializeComp.calculate = function(){
    console.log("hello");
    var array = factorializeComp.input.split(" ").map(function(item){
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

    function factorialize(num) {
    var array = [];
    if(num === 0){
       return 0;
     } else if(num === 1){
       return 1;
     }
     for (i = 0; i < num; i){
         array.push(num);
        num--;
      }
    sum = array.reduce(function(previousVal, currentVal){
        return previousVal * currentVal;
    });
    return sum;
    };


    factorializeComp.sum = factorialize(newArray);
  }

}


FactorializeCompCtrl.$inject = [];
