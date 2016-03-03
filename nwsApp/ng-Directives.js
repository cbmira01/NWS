 
  // Directive to handle reflow rendering of Foundation panels.
  nwsApp.directive("myReflowPanels", function($timeout) {
      return {
          link: function(scope, element, attrs) {
            $timeout(function() {
              $(window).bind("resize").trigger("resize");
            }, 1500, false);
          }
      };
  });
  