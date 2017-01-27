angular.module('App')
.component('sidenavComp', {
  templateUrl: 'app/components/sidenav/sidenav.html',
  controller: SidenavCompCtrl,
  controllerAs: 'sidenavComp'
});

function SidenavCompCtrl(DataServices){
  var sidenavComp = this;

  sidenavComp.functions = DataServices.arrayOfFunctions();
}

SidenavCompCtrl.$inject = ['DataServices'];
