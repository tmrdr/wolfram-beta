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
    .state('largestIntState', {
      url: '/largestInt',
      component: 'largestIntComp'
    })
    .state('smallestIntState', {
      url: '/smallestInt',
      component: 'smallestIntComp'
    })
    .state('factorializeState', {
      url: '/factorialize',
      component: 'factorializeComp'
    })
    .state('mergeTwoSortedState', {
      url: '/mergeTwoSorted',
      component: 'mergeTwoSortedComp'
    })
     .state('minimumDifferenceState', {
     url: '/minimumDifference',
     component: 'minimumDifferenceComp'
    })
    .state('reverseStrState', {
      url: '/reverseStr',
      component: 'reverseStrComp'
    })
    .state('calculatorState', {
      url: '/calculator',
      component: 'calculatorComp'
    })
    .state('reverseOrderState', {
      url: '/reverseOrder',
      component: 'reverseOrderComp'
    })
    .state('sortState', {
      url: '/sort',
      component: 'sortComp'
    })

    $locationProvider.html5Mode(true);

  }

]);
