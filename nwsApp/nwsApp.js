
  "use strict";

  var nwsApp = angular.module("nwsApp", ["ngRoute", "slickCarousel", "youtube-embed"]);

  nwsApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self", 
      "https://www.youtube.com/"
    ]);
  });