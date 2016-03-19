
  nwsApp.controller("DeleteContentController", ["$scope", "$http", "$location", "$routeParams", "$route", "$sce", "myServices", 
    function ($scope, $http, $location, $routeParams, $route, $sce, myServices) {
  
      $http.get("http://localhost/nws/php/readAll.php?table=ads")
        .success(function(data) {
          $scope.ads = data;
        });

      $scope.deleteAd = function(id) {       
        $scope.deleteContent("ads", id);
      };

      $scope.deleteContent = function(table, id) {
        var json = {
          "id": id
        }; 
        $http.post("http://localhost/nws/php/delete.php?table=" + table, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.DeleteController: " + status);
          });

        $route.reload();
      };

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC" ], index );
      };
    }
  ]);  

