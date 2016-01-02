 angular.module('starter.controllers', [])


.controller('ParksCtrl', function($scope,$log,$http,ParkData) {  
 $log.info('ParksCtrl created');
 $http.get('data/data.json')
  .success(function(data,status,headers,config){
    ParkData.initData(data);
    $scope.parks = ParkData.getParks();
  })
  .error(function(data,status,headers,config){
    $log.info('error' + data);
  })
})

.controller('ParkDetailCtrl', function($scope, $stateParams, $log) {
  $log.info('ParkDetailCtrl created');
})

.controller('MapCtrl', function($scope,$log) {
  $log.info('MapCtrl created');
});
