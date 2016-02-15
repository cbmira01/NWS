
  crudApp.config(function($routeProvider) {
      $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        })
        .when("/create", {
            templateUrl: "templates/create.html",
            controller: "CreateController"
        })        
        .when("/readAll", {
            templateUrl: "templates/readAll.html",
            controller: "ReadController"
        })
        .when("/update", {
            templateUrl: "templates/update.html",
            controller: "UpdateController"
        }) 
        .when("/delete", {
            templateUrl: "templates/delete.html",
            controller: "DeleteController"
        })        
        .otherwise({
            redirectTo: "/"
        });
  });
