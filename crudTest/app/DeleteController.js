  
  crudApp.controller("DeleteController", ["$scope", "$http",
    function ($scope, $http) {
      $scope.errors = [];
      $scope.msgs = [];
      $scope.userToDelete = "None selected.";     
      
      $http.get("http://localhost/nws/crudTest/php/readAll.php")
        .success(function(data) {
          $scope.users = data;
        });
        
      $scope.changeUserToDelete = function(utd) {
        $scope.userToDelete = utd;
      };        

      $scope.deleteUser = function(utd) {
        $scope.errors.splice(0, $scope.errors.length);
        $scope.msgs.splice(0, $scope.msgs.length);

        var deleteJson = {
          "id": utd
        };
        
        $http.post("http://localhost/nws/crudTest/php/deleteUser.php", deleteJson)
          .success(function(data, status, headers, config) {
            if (data.msg !== "") {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })
          .error(function(data, status) {
            $scope.errors.push(status);
            alert("Error caught in crudApp.js, DeleteController: " + status);
          });
      };
    }
  ]);  
