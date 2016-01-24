
  "use strict";

  var crudApp = angular.module("crudApp", ["ngRoute"]);

  crudApp.config(function($routeProvider) {
      $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "Home"
        })
        .when("/readAll", {
            templateUrl: "templates/readAll.html",
            controller: "ReadAll"
        })
        .when("/create", {
            templateUrl: "templates/create.html",
            controller: "Create"
        })
        .otherwise({
            redirectTo: "/"
        });
  });

  crudApp.controller("Home");

  crudApp.controller("ReadAll", ["$scope", "$http",
    function ($scope, $http) {
      $http.get('http://localhost/php-exercises/crudTest/php/readAll.php').
        success(function(data) {
          $scope.users = data;
        });
    }
  ]);

  crudApp.controller("Create", ["$scope", "$http",
    function ($scope, $http) {
      $scope.errors = [];
      $scope.msgs = [];

      $scope.createUser = function() {
        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);

        $http.post('http://localhost/php-exercises/crudTest/php/createUser.php',
          {'uname': $scope.userName, 'email': $scope.userEmail} )

          .success(function(data, status, headers, config) {
            if (data.msg !== '') {
                $scope.msgs.push(data.msg);
            } else {
                $scope.errors.push(data.error);
            }
          })

          .error(function(data, status) {
            $scope.errors.push(status);
            alert(status);
          });
      };
    }
  ]);
