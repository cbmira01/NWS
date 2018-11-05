
  nwsApp.config(function($routeProvider) {
    $routeProvider
      .when("/", {
          templateUrl: "templates/home.html",
          controller: "HomeController"
      })
      .when("/read-article/:uuid", {
          templateUrl: "templates/read-article.html",
          controller: "ReadArticleController"
      })
      .when("/services", {
          templateUrl: "templates/services.html",
          controller: "ServicesController"
      })
      .when("/officers", {
          templateUrl: "templates/officers.html",
          controller: "OfficersController"
      })
      .when("/archives", {
          templateUrl: "templates/archives.html",
          controller: "ArchivesController"
      })
      .when("/add-content", {
          templateUrl: "templates/add-content.html",
          controller: "AddContentController"
      })
      .when("/delete-content", {
          templateUrl: "templates/delete-content.html",
          controller: "DeleteContentController"
      })
      .when("/article-not-found", {
          templateUrl: "templates/article-not-found.html",
          controller: "ArticleNotFoundController"
      })
      .otherwise({
          redirectTo: "/"
      });
  });
