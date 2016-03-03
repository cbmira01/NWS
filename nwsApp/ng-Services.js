
  // myServices factory provides support functions for all controllers.
  nwsApp.factory("myServices", function() {
      return {
          // Cycle through colors for Foundation panels.
          //   Colors are chosen from local CSS definitions.
          svcColorCycle: function( colors, index ) {
            return ( colors[index%(colors.length)] );
          }
      }; // end return
  });
