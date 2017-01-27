angular.module('App')
.component('navbarComp', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: NavbarCompCtrl,
  controllerAs: 'navbarComp'
});

function NavbarCompCtrl(){
  var navbarComp = this;

  navbarComp.functions = [
    "findSum",
    "largestNumber",
    "smallestNumber",
    "factorialize",
    "mergeTwoSorted",
    "reverseStr"
  ]
}

NavbarCompCtrl.$inject = [];
