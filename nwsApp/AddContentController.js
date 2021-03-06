
  nwsApp.controller("AddContentController", ["$scope", "$http", "$route", "$sce", "$anchorScroll", "myServices", 
    function ($scope, $http, $route, $sce, $anchorScroll, myServices) {

      $scope.gotoAnchor = function( anchorLocation ) {
        $anchorScroll( anchorLocation );
      };

      $scope.updateFeature = function() {
        var json = {
          "id": 1,
          "title": $scope.feature.title, 
          "article": $scope.feature.article,
          "image1": $scope.feature.image1,
          "image2": $scope.feature.image2,
          "image3": $scope.feature.image3
        };
        $http.post(`http://${hostname}/nws/php/updateFeature.php`, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          }); 
        $route.reload();
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

      $scope.createArchive = function() {
        var json = {
          "title": $scope.archive.title,
          "link": $scope.archive.link
        };
        $scope.createContent("archives", json);
      }; 

      $scope.createService = function() {
        var json = {
          "text": $scope.service.text
        };
        $scope.createContent("services", json);
      }; 

      $scope.createOfficer = function() {
        var json = {
          "name": $scope.officer.name,
          "email": $scope.officer.email,
          "description": $scope.officer.description,
          "photo": $scope.officer.photo
        };
        $scope.createContent("officers", json);
      }; 

      $scope.createContent = function(table, json) {
        $http.post(`http://${hostname}/nws/php/create.php?table=${table}`, json)
          .success(function(data, status, headers, config) {
          })
          .error(function(data, status) {
            alert("Error caught in nwsApp.js.AddContentController: " + status);
          });
        $route.reload();
      };
    }
  ]);
