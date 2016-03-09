
  nwsApp.controller("HomeController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {
      $http.get("http://localhost/nws/php/readFeature.php")
        .success(function(data) {
          $scope.feature = data[0];
        });

      $http.get("http://localhost/nws/php/readArticles.php")
        .success(function(data) {
          $scope.articles = data;
        });
              // implement truncated text 
              //$scope.truncText = $scope.article.text.substr(0,19) + "...";
/*
      $http.get("http://localhost/nws/php/readVideos.php")
        .success(function(data) {
          $scope.videos = data;
        });

      $http.get("http://localhost/nws/php/readAds.php")
        .success(function(data) {
          $scope.ads = data;
        }); */

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC", "pastelB", "pastelC" ], index );
      };

    }
  ]);
