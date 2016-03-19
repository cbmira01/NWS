
  nwsApp.controller("ReadArticleController", ["$scope", "$http", "$location", "$routeParams", "$route", "$sce", "myServices", 
    function ($scope, $http, $location, $routeParams, $route, $sce, myServices) {

      $http.get("http://localhost/nws/php/readArticle.php?uuid=" + $routeParams.uuid)
        .success(function(data) {
          $scope.article = data;
        }); 
    }
  ]);

