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
    .state('largestNumberState', {
      url: '/largestNumber',
      component: 'largestNumberComp'
    })
    .state('smallestNumberState', {
      url: '/smallestNumber',
      component: 'smallestNumberComp'
    })
    .state('factorializeState', {
      url: '/factorialize',
      component: 'factorializeComp'
    })
    .state('mergeTwoSortedState', {
      url: '/mergeTwoSorted',
      component: 'mergeTwoSortedComp'
    })

    $locationProvider.html5Mode(true);


  }

]);
