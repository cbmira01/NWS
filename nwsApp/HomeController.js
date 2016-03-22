
  "use strict";

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

      $scope.greenCycle = function( index ) {
        return myServices.svcColorCycle( [ "greenA", "greenB", "greenC", "greenB", "greenC" ], index );
      };

      $scope.purpleCycle = function( index ) {
        return myServices.svcColorCycle( [ "purpleA", "purpleB", "purpleC", "purpleB", "purpleC" ], index );
      };
    }
  ]);
