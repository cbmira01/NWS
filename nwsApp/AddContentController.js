
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

      $scope.createArticle = function() {
        $scope.article.uuid = generateUUID();
        var json = {
          "uuid": $scope.article.uuid,
          "hfso": $scope.article.hfso,
          "title": $scope.article.title,
          "image": $scope.article.image,
          "text": $scope.article.text
        };
        $scope.createContent("articles", json);
      };

      $scope.createVideo = function() {
        var json = {
          "site": $scope.video.site,
          "type": $scope.video.type,
          "title": $scope.video.title,
          "description": $scope.video.description,
          "link": $scope.video.link
        };
        $scope.createContent("videos", json);
      }; 

      $scope.createAd = function() {
        var json = {
          "link": $scope.adLink 
        };
        $scope.createContent("ads", json);
      };

/*       $scope.createArchive = function() {
        var json = {
          "title": $scope.title,
          "link": $scope.link
        };
        $scope.createContent("archives", json);
      }; */

/*       $scope.createService = function() {
        var json = {
          "text": $scope.text
        };
        $scope.createContent("services", json);
      }; */

/*       $scope.createOfficer = function() {
        var json = {
          "name": $scope.name,
          "email": $scope.email,
          "description": $scope.description,
          "photo": $scope.photo
        };
        $scope.createContent("officers", json);
      }; */

      $scope.createContent = function(table, json) {
alert("createContent called for: " + table);
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
