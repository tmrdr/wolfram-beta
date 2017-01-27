angular.module('App')
.component('reverseStrComp', {
  templateUrl: 'app/containers/reverseStr/reverseStr.html',
  controller: ReverseStrCompCtrl,
  controllerAs: 'reverseStrComp'
});

function ReverseStrCompCtrl(){

  var reverseStrComp = this;
  reverseStrComp.input = null;
  reverseStrComp.str = null;


  reverseStrComp.calculate = function(){
    console.log("hello");
    var str = reverseStrComp.input;

    function reverseStr(str) {
      var str = str.split('').reverse().join('');
      return str;
    };


    reverseStrComp.str = reverseStr(str);
  }

}


ReverseStrCompCtrl.$inject = [];
