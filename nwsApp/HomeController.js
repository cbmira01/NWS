
  nwsApp.controller("HomeController", ["$scope", "$http", "$sce", "myServices", 
    function($scope, $http, $sce, myServices) {

      (function init() {
        var contentTables = [
          "feature",
          "articles",
          "videos",
          "ads"
        ];
        contentTables.forEach(function(table) {
          $http.get("http://localhost/nws/php/readAll.php?table=" + table)
            .success(function(data) {
              $scope[table] = data;
            });
        });
      })();

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC", "pastelB", "pastelC" ], index );
      };
    }
  ]);
