
  nwsApp.controller("OfficersController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get("http://localhost/nws/php/readOfficers.php")
        .success(function(data) {
          $scope.officers = data;
        });

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "purpleA", "purpleB", "purpleC" ], index );
      };

    }
  ]);
