
  nwsApp.controller("AddContentController", ["$scope", "$http", "$route", "$sce", "myServices", 
    function ($scope, $http, $route, $sce, myServices) {

      $scope.updateFeature = function() {
        var json = {
          "id": 1,
          "title": $scope.featureTitle, 
          "article": $scope.featureArticle,
          "image1": $scope.featureImage1,
          "image2": $scope.featureImage2,
          "image3": $scope.featureImage3
        };

        $http.post("http://localhost/nws/php/updateFeature.php", json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          }); 
      }; 

//article
//video
      $scope.createAd = function() {
        var json = {
          "link": $scope.adLink 
        };
        $scope.createContent("ads", json);
      };
//archive
//service
//officer

      $scope.createContent = function(table, json) {
        $http.post("http://localhost/nws/php/create.php?table=" + table, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          });

        $route.reload();
      };
    }
  ]);
