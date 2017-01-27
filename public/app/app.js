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
<<<<<<< HEAD
    .state('mergeTwoSortedState', {
      url: '/mergeTwoSorted',
      component: 'mergeTwoSortedComp'
=======
    .state('reverseStrState', {
      url: '/reverseStr',
      component: 'reverseStrComp'
>>>>>>> e42bcb6b2b301a13221b895fc867161de125e578
    })

    $locationProvider.html5Mode(true);


  }

]);
