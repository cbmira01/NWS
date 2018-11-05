
  nwsApp.controller("ServicesController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get("http://localhost/nws/php/readAll.php?table=services")
        .success(function(data) {
          $scope.services = data;
        });

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC" ], index );
      };
    }
  ]);
