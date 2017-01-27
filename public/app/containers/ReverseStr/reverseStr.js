angular.module('App')
.component('reverseStrComp', {
  templateUrl: 'app/containers/reverseStr/reverseStr.html',
  controller: ReverseStrCompCtrl,
  controllerAs: 'reverseStrComp'
});

function reverseStrCompCtrl(){

  var reverseStrComp = this;
  reverseStrComp.phrase = "Reversing the string";
  largestNumberComp.input = "";

  largestNumberComp.calculate = function(){
    console.log("hello");

    function reverseString(str) {
      var str = str.split('').reverse().join('');
      return str;
    }


    reverseStrComp.str = reverseStr(str);
  }

}


reverseStrCompCtrl.$inject = [];
