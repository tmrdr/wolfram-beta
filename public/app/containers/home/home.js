angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(){
  var homeComp = this;
  homeComp.phrase = "hello WDI11";
}

HomeCompCtrl.$inject = [];
