angular.module('App')
.component('findSumComp', {
  templateUrl: 'app/containers/findSum/findSum.html',
  controller: FindSumCtrl,
  controllerAs: 'findSumCtrl'
});

function FindSumCtrl(){

  var findSumComp = this;
  findSumComp.phrase = "finding the sums";
}


FindSumCtrl.$inject = [];
