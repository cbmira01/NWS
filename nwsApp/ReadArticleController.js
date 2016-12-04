
  "use strict";

  nwsApp.controller("ReadArticleController", ["$scope", "$http", "$location", "$routeParams", "$route", "$sce", "myServices",
    function ($scope, $http, $location, $routeParams, $route, $sce, myServices) {

      $http.get("http://localhost/nws/php/readArticle.php?uuid=" + $routeParams.uuid)
        .success(function(data) {
          $scope.article = data;

          // If no database query result, then no page to display
          if (typeof $scope.article[0] === "undefined") {
              $location.path("/article-not-found");
          }
        });
    }
  ]);

