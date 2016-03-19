
  nwsApp.controller("HomeController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get("http://localhost/nws/php/readAll.php?table=feature")
        .success(function(data) {
          $scope.feature = data[0];
        });

      $http.get("http://localhost/nws/php/readAll.php?table=articles")
        .success(function(data) {
          $scope.articles = data;
        });

      $http.get("http://localhost/nws/php/readAll.php?table=videos")
        .success(function(data) {
          $scope.videos = data;
        });

      $http.get("http://localhost/nws/php/readAll.php?table=ads")
        .success(function(data) {
          $scope.ads = data;
        });

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC", "pastelB", "pastelC" ], index );
      };

    }
  ]);
