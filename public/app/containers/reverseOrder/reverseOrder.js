angular.module('App')
.component('reverseOrderComp', {
  templateUrl: 'app/containers/reverseOrder/reverseOrder.html',
  controller: ReverseOrderCompCtrl,
  controllerAs: 'reverseOrderComp'
});

function ReverseOrderCompCtrl(){

  var reverseOrderComp = this;
  reverseOrderComp.input = "hello world";
  reverseOrderComp.str = null;


  reverseOrderComp.calculate = function(){
    var str = reverseOrderComp.input;

    function reverseOrder(str){
      str = str.split(" ");
      str = str.reverse();
      str = str.join(" ")
      return str;
    };



    reverseOrderComp.str = reverseOrder(str);
  }

  reverseOrderComp.calculate();
}

ReverseOrderCompCtrl.$inject = [];
