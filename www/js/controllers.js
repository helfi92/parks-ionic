 angular.module('starter.controllers', [])


.controller('ParksCtrl', function($scope,$log,$http,ParkData) {  
 $log.info('ParksCtrl created');
})

.controller('ParkDetailCtrl', function($scope, $stateParams, $log) {
  $log.info('ParkDetailCtrl created');
})

.controller('MapCtrl', function($scope,$log) {
  $log.info('MapCtrl created');
});
