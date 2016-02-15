
  crudApp.controller("ReadController", ["$scope", "$http",
    function ($scope, $http) {
      $http.get("http://localhost/nws/crudTest/php/readAll.php")
        .success(function(data) {
          $scope.users = data;
        });
    }
  ]);
