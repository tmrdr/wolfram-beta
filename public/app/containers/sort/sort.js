angular.module('App')
.component('sortComp', {
  templateUrl: 'app/containers/sort/sort.html',
  controller: SortCompCtrl,
  controllerAs: 'sortComp'
});

function SortCompCtrl(){
  $("input").focus();

  var sortComp = this;
  sortComp.input = "9 1 5 2 8";
  sortComp.answer = null;

  sortComp.calculate = function(){
    var str = sortComp.input;

    function sort(str){
       str = str.split(" ");
       str = str.sort();
       str = str.join(" ");
       return str;
    };


    sortComp.answer = sort(str);
  }

  sortComp.calculate();

}


SortCompCtrl.$inject = [];
