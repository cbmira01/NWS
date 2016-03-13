
  nwsApp.controller("ArchivesController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get("http://localhost/nws/php/readArchives.php")
        .success(function(data) {
          $scope.archives = data;
        });

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "greenA", "greenB", "greenC" ], index );
      };

    }
  ]);
