
  crudApp.controller("CreateController", ["$scope", "$http",
    function ($scope, $http) {
      $scope.errors = [];
      $scope.msgs = [];

      $scope.createUser = function() {
        $scope.errors.splice(0, $scope.errors.length);
        $scope.msgs.splice(0, $scope.msgs.length);
            
        var createJson = {
          "name": $scope.userName, 
          "email": $scope.userEmail
        };
        
        $http.post("http://localhost/nws/crudTest/php/createUser.php", createJson)
          .success(function(data, status, headers, config) {
            if (data.msg !== "") {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })
          .error(function(data, status) {
            $scope.errors.push(status);
            alert("Error caught in crudApp.js, CreatController: " + status);
          });
      };
    }
  ]);
  