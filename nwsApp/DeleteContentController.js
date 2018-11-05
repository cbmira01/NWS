
  nwsApp.controller("DeleteContentController", ["$scope", "$http", "$location", "$routeParams", "$route", "$sce", "$anchorScroll", "myServices", 
    function ($scope, $http, $location, $routeParams, $route, $sce, $anchorScroll, myServices) {
  
      $scope.gotoAnchor = function( anchorLocation ) {
        $anchorScroll( anchorLocation );
      };

      (function init() {
        var contentTables = [
          "feature",
          "articles",
          "videos",
          "ads",
          "archives",
          "services",
          "officers"
        ];
        contentTables.forEach(function(table) {
          $http.get(`http://${hostname}/nws/php/readAll.php?table=${table}`)
            .success(function(data) {
              $scope[table] = data;
            });
        });
      })();

      $scope.deleteArticle = function(id) {       
        $scope.deleteContent("articles", id);
      };

      $scope.deleteVideo = function(id) {       
        $scope.deleteContent("videos", id);
      };

      $scope.deleteAd = function(id) {       
        $scope.deleteContent("ads", id);
      };

      $scope.deleteArchive = function(id) {       
        $scope.deleteContent("archives", id);
      };

      $scope.deleteService = function(id) {       
        $scope.deleteContent("services", id);
      };

      $scope.deleteOfficer = function(id) {       
        $scope.deleteContent("officers", id);
      };

      $scope.deleteContent = function(table, id) {
        var json = {
          "id": id
        }; 
        $http.post(`http://${hostname}/nws/php/delete.php?table=${table}`, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.DeleteController: " + status);
          });
        $route.reload();
      };

      $scope.colorCycle = function( index ) {
        return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC" ], index );
      };
    }
  ]);  

