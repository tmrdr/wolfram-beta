angular.module('App')
.component('findSumComp', {
  templateUrl: 'app/containers/findSum/findSum.html',
  controller: FindSumCompCtrl,
  controllerAs: 'findSumComp'
});

function FindSumCompCtrl(){

  var findSumComp = this;
  findSumComp.phrase = "finding the sums";
}


FindSumCompCtrl.$inject = [];
