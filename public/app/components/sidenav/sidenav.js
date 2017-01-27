angular.module('App')
.component('sidenavComp', {
  templateUrl: 'app/components/sidenav/sidenav.html',
  controller: SidenavCompCtrl,
  controllerAs: 'sidenavComp'
});

function SidenavCompCtrl($rootScope, $state, $stateParams, DataServices){
  var sidenavComp = this;

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  console.log("state:", $rootScope.$state.current.name);

  sidenavComp.isHome = function(){
    if($rootScope.$state.current.name == 'homeState'){
      console.log("true");
      return true;
    } else{
      console.log("false");
      return false;
    }
  }

  sidenavComp.isHome();

  sidenavComp.functions = DataServices.arrayOfFunctions();
}

SidenavCompCtrl.$inject = ['$rootScope', '$state', '$stateParams', 'DataServices'];
