angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    })
    .state('findSumState', {
      url: '/findSum',
      component: 'findSumComp'
    })

    $locationProvider.html5Mode(true);


  }

]);
