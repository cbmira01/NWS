
  nwsApp.config(function($routeProvider) {
      $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/services", {
            templateUrl: "templates/services.html",
            controller: "ServicesController"
        })        
        .when("/officers", {
            templateUrl: "templates/officers.html",
            controller: "OfficersController"
        }) 
        .when("/archive", {
            templateUrl: "templates/archive.html",
            controller: "ArchiveController"
        })        
        .otherwise({
            redirectTo: "/"
        });
  });
