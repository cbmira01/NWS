
  "use strict";

  var crudApp = angular.module("crudApp", ["ngRoute"]);

  crudApp.config(function($routeProvider) {
      $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/create", {
            templateUrl: "templates/create.html",
            controller: "CreateController"
        })        
        .when("/readAll", {
            templateUrl: "templates/readAll.html",
            controller: "ReadController"
        })
        .when("/update", {
            templateUrl: "templates/update.html",
            controller: "UpdateController"
        }) 
        .when("/delete", {
            templateUrl: "templates/delete.html",
            controller: "DeleteController"
        })        
        .otherwise({
            redirectTo: "/"
        });
  });

  crudApp.controller("Home");

  crudApp.controller("ReadController", ["$scope", "$http",
    function ($scope, $http) {
      $http.get("http://localhost/nws/crudTest/php/readAll.php")
        .success(function(data) {
          $scope.users = data;
        });
    }
  ]);

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
