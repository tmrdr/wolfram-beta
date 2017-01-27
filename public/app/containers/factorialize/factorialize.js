angular.module('App')
.component('factorializeComp', {
  templateUrl: 'app/containers/factorialize/factorialize.html',
  controller: FactorializeCompCtrl,
  controllerAs: 'factorializeComp'
});

function FactorializeCompCtrl(){
  $("input").focus();

  var factorializeComp = this;
  factorializeComp.input = 7;
  factorializeComp.sum = null;

  factorializeComp.calculate = function(){

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

    factorializeComp.sum = factorialize(factorializeComp.input);
  }

  factorializeComp.calculate();

}


FactorializeCompCtrl.$inject = [];
