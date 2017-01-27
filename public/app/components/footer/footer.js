angular.module('App')
.component('footerComp', {
  templateUrl: 'app/components/footer/footer.html',
  controller: FooterCompCtrl,
  controllerAs: 'footerComp'
});

function FooterCompCtrl(){
  var footerComp = this;

}

FooterCompCtrl.$inject = [];
