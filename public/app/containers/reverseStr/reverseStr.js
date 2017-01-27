angular.module('App')
.component('reverseStrComp', {
  templateUrl: 'app/containers/reverseStr/reverseStr.html',
  controller: ReverseStrCompCtrl,
  controllerAs: 'reverseStrComp'
});

function ReverseStrCompCtrl(){

  var reverseStrComp = this;
  reverseStrComp.input = "hello world";
  reverseStrComp.str = null;


  reverseStrComp.calculate = function(){
    var str = reverseStrComp.input;

    function reverseStr(str) {
      var str = str.split('').reverse().join('');
      return str;
    };


    reverseStrComp.str = reverseStr(str);
  }

  reverseStrComp.calculate();
}

ReverseStrCompCtrl.$inject = [];
