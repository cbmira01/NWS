
  "use strict";

  var nwsApp = angular.module("nwsApp", ["ngRoute", "slickCarousel"]);

  nwsApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self", 
      "https://www.youtube.com/"
    ]);
  });