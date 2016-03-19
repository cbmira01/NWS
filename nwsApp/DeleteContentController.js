
  nwsApp.controller("DeleteContentController", ["$scope", "$http", "$location", "$routeParams", "$route", "$sce", "myServices", 
    function ($scope, $http, $location, $routeParams, $route) {
      $scope.errors = [];
      $scope.msgs = [];
      $scope.adMarked = ""; // nothing selected from the table
      $scope.adButton = "Select a record";    
      
      $http.get("http://localhost/nws/php/readAll.php?table=ads")
        .success(function(data) {
          $scope.ads = data;
        });
        
      $scope.markAd = function(del) {
        $scope.adMarked = del;
        $scope.adButton = "Delete " + del;
      };        

      $scope.deleteAd = function(del) {
        $scope.errors.splice(0, $scope.errors.length);
        $scope.msgs.splice(0, $scope.msgs.length);

        var deleteJson = {
          "id": del
        };
        
        $http.post("http://localhost/nws/php/deleteAd.php", deleteJson)
          .success(function(data, status, headers, config) {
            if (data.msg !== "") {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })
          .error(function(data, status) {
            $scope.errors.push(status);
            alert("Error caught in nws.js.DeleteController: " + status);
          });

        $route.reload();
      };
    }
  ]);  
