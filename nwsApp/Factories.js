
  // myServices factory provides support functions for all controllers.
  nwsApp.factory("myServices", function() {
      return {
          // Cycle through colors for Foundation panels.
          svcColorCycle: function(index) {
            // Colors are chosen from local CSS definitions.
              var colors = ["articleColorA",
                            "articleColorB",
                            "articleColorC",
                            "articleColorB",
                            "articleColorC"
              ];
              return ( colors[index%(colors.length)] );
          }
      }; // end return
  });
