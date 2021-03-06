
  nwsApp.controller("ArchivesController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get(`http://${hostname}/nws/php/readAll.php?table=archives`)
        .success(function(data) {
          $scope.archives = data;
        });

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "greenA", "greenB", "greenC" ], index );
      };
    }
  ]);
