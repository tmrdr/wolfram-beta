angular.module('App')
.component('mergeTwoSortedComp', {
  templateUrl: 'app/containers/mergeTwoSorted/mergeTwoSorted.html',
  controller: MergeTwoSortedCompCtrl,
  controllerAs: 'mergeTwoSortedComp'
})

function MergeTwoSortedCompCtrl(DataServices){
  var mergeTwoSortedComp = this;

  mergeTwoSortedComp.input1 = null;
  mergeTwoSortedComp.input2 = null;
  mergeTwoSortedComp.answer = null;

  mergeTwoSortedComp.calculate = function(){

    var a1 = DataServices.stringToArray(mergeTwoSortedComp.input1);
    var a2 = DataServices.stringToArray(mergeTwoSortedComp.input2);

    // merge and sort two arrays seperated by comma
    function merge(a1, a2) {
      var i1 = 0;
      var i2 = 0;
      var results = [];

      while (i1 < a1.length && i2 < a2.length) {
        if (a1[i1] < a2[i2]) {
          results.push(a1[i1]);
          i1++;
        } else {
          results.push(a2[i2]);
          i2++;
        }
      }
      while (i1 < a1.length) {
        results.push(a1[i1]);
        i1++;
      }
      while (i2 < a2.length) {
        results.push(a2[i2]);
        i2++;
      }

      return "["+results.join(", ")+"]";
    }

    mergeTwoSortedComp.answer = merge(a1, a2);
  }

}

MergeTwoSortedCompCtrl.$inject = ['DataServices'];
