  
  crudApp.controller("UpdateController", ["$scope", "$http",
    function ($scope, $http) {
      $scope.errors = [];
      $scope.msgs = [];
      $scope.userToUpdate = "None selected.";    
      $scope.userNewName = "";
      $scope.userNewEmail = "";      
      
      $http.get("http://localhost/nws/crudTest/php/readAll.php")
        .success(function(data) {
          $scope.users = data;
        });
        
      $scope.changeUserToUpdate = function(utu) {
        $scope.userToUpdate = utu;
      };        

      $scope.updateUser = function(utu) {
        $scope.errors.splice(0, $scope.errors.length);
        $scope.msgs.splice(0, $scope.msgs.length);

        var updateJson = {
          "id": utu, 
          "name": $scope.userNewName,
          "email": $scope.userNewEmail,
        };
          
        $http.post("http://localhost/nws/crudTest/php/updateUser.php", updateJson )
          .success(function(data, status, headers, config) {
            if (data.msg !== "") {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })
          .error(function(data, status) {
            $scope.errors.push(status);
            alert("Error caught in crudApp.js, UpdateController: " + status);
          });
      };
    }
  ]);  
  