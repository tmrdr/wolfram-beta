angular.module('App')
.component('functionListComp', {
  templateUrl: 'app/components/functionList/functionList.html',
  controller: FunctionListCompCtrl,
  controllerAs: 'functionListComp'
});

function FunctionListCompCtrl(){
  var functionListComp = this;

  functionListComp.functions = [
    "findSum",
    "largestNumber",
    "smallestNumber",
    "factorialize",
    "mergeTwoSorted",
    "reverseStr"
  ]
}

FunctionListCompCtrl.$inject = [];
