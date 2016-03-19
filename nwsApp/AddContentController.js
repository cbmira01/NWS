
  nwsApp.controller("AddContentController", ["$scope", "$http", "$route", "$sce", "myServices", 
    function ($scope, $http, $route) {

      $scope.createAd = function() {
        var json = {
          "link": $scope.adLink 
        };
        $scope.createContent("ads", json);
      };

      $scope.createContent = function(table, json) {
        $http.post("http://localhost/nws/php/create.php?table=" + table, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          });

        $route.reload();
      };
    }
  ]);
