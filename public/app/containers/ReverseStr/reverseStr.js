angular.module('App')
.component('reverseStrComp', {
  templateUrl: 'app/containers/reverseStr/reverseStr.html',
  controller: ReverseStrCompCtrl,
  controllerAs: 'reverseStrComp'
});

function ReverseStrCompCtrl(){

  var reverseStrComp = this;
  reverseStrComp.phrase = "Reversing the string";
  reverseStrComp.input = "hello";

  reverseStrComp.calculate = function(){
    console.log("hello");

    function reverseStr(str) {
      var str = str.split('').reverse().join('');
      return str;
    }


    reverseStrComp.str = reverseStr(str);
  }

}


ReverseStrCompCtrl.$inject = [];
