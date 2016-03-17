
  nwsApp.controller("AddContentController", ["$scope", "$http", "$sce", "myServices", 
    function ($scope, $http) {
      $scope.errors = [];
      $scope.msgs = [];

      $scope.createAd = function() {
        $scope.errors.splice(0, $scope.errors.length);
        $scope.msgs.splice(0, $scope.msgs.length);
            
        var createJson = {
          "link": $scope.adLink 
        };
        
        $http.post("http://localhost/nws/php/createAd.php", createJson)
          .success(function(data, status, headers, config) {
            if (data.msg !== "") {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })
          .error(function(data, status) {
            $scope.errors.push(status);
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          });
      };

// ----------------
    }
  ]);
