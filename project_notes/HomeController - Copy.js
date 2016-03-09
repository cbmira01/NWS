
  nwsApp.controller("HomeController", ["$scope", "$sce", "myServices", function($scope, $sce, myServices) {

    // Wedge array for Slick images: { imageSource, imageAlt }
    var slides = [
      { src:"img/city1.jpg", alt:"City picture 1 ng" },
      { src:"img/city2.jpg", alt:"City picture 2 ng" },
      { src:"img/city3.jpg", alt:"City picture 3 ng" },
      { src:"img/city4.jpg", alt:"City picture 4 ng" },
      { src:"img/city5.jpg", alt:"City picture 5 ng" },
      { src:"img/city6.jpg", alt:"City picture 6 ng" },
      { src:"img/city7.jpg", alt:"City picture 7 ng" },
      { src:"img/city8.jpg", alt:"City picture 8 ng" },
      { src:"img/city9.jpg", alt:"City picture 9 ng" },
      { src:"img/city10.jpg", alt:"City picture 10 ng" }
    ];

    var slides = [
      { src: "https://pixabay.com/static/uploads/photo/2016/01/16/22/53/buildings-1144192_960_720.jpg", alt:"pic 1" },
      { src: "https://pixabay.com/static/uploads/photo/2013/05/02/21/09/suffer-city-108621_960_720.jpg", alt:"pic 2" },
      { src: "https://pixabay.com/static/uploads/photo/2014/02/17/10/20/statue-of-liberty-267948_960_720.jpg", alt:"pic 3" }
    ];

    // Wedge array for inline articles: { hide-for-small-only, imageSource, imageAlt, title, text, readMoreLink }
    var inlines = [
      // { hfso:, src:"", alt:"", title:"", text:"", readMore:"" },
      { hfso:true, src:"img/people1.jpg", alt:"Image for people article", title:"People Article", text:"This people article lorem ipsum dolor...", readmore:"#/blogs" },
      { hfso:true, src:"img/nature1.jpg", alt:"Image for nature article", title:"Nature Article", text:"This nature article ipsum dolor...", readmore:"#/blogs" },
      { hfso:false, src:"img/food1.jpg", alt:"Image for food article", title:"Food Article", text:"This food article dolor...", readmore:"#/blogs" },

      { 
        hfso:true, 
        src:"https://pixabay.com/static/uploads/photo/2016/02/03/15/58/flag-1177326_960_720.png", 
        alt:"Picture of British flag", 
        title:"British flag", 
        text:"Display of British flag", 
        readmore:"#/blogs"
      },

      { 
        hfso:false, 
        src:"https://pixabay.com/static/uploads/photo/2016/01/11/17/04/usa-flag-1133963_960_720.jpg", 
        alt:"Picture of American flag", 
        title:"American flag",
        text:"Display of American flag", 
        readmore:"#/blogs"
      },

      // { hfso:, src:"", alt:"", title:"", text:"", readmore:"#/blogs" },
      // { hfso:, src:"", alt:"", title:"", text:"", readmore:"#/blogs" },
    ];

    // Wedge array for videos: { videosite, videotype, videoSource, title, text }
    //    videosites handled so far: youtube, onsite, null
    var videos = [
      // { videosite:"", videotype:"", src:"", title:"", text:"" },
      { 
        videosite:"onsite", 
        videotype:"video/ogg", 
        src:"videos/Natural_gas_video.ogg", 
        title:"Natural Gas", 
        text:"Large quantities of natural gas discovered in Deer Park neighborhood!" 
      },

      { 
        videosite:"youtube", 
        videotype:"", 
        src:"https://www.youtube.com/watch?v=MaHrMR7JRS8",
        // src:"MaHrMR7JRS8",
        title:"Pinback: A Request", 
        text:"Deer Park finally hears from a great band...!" 
      },

      { 
        videosite:"", 
        videotype:"", 
        src:"http://previews.123rf.com/images/tribalium123/tribalium1231402/tribalium123140200006/26056388-do-not-record-video-sign-no-video-allowed-sign-do-not-record-video-icon-no-video-cameras-public-sign-Stock-Vector.jpg", 
        title:"No video available.", 
        text:"Sorry, there is no video available." 
      },

      { 
        videosite:"youtube", 
        videotype:"", 
        src:"https://www.youtube.com/watch?v=EZ10jbzcD18",
        title:"Dave's World: He Gooched His Bass Guitar", 
        text:"Fix a bass, enjoy a beer." 
      },

      { 
        videosite:"youtube", 
        videotype:"", 
        src:"https://www.youtube.com/watch?v=GLf3nrZXZT8",
        title:"You Only Live Once (Cover)", 
        text:"Five dudes, who look remarkably alike, cover The Strokes." 
      },

    ];

    // Wedge array for advertising panels
    var ads = [
      // { src:"", alt:"" },

      { 
        src:"img/comeinwereopen.svg", 
        alt:"Advertising, sign" 
      },

      { 
        src:"img/studio-bcard-white.svg", 
        alt:"Advertising, business card" 
      },

    ];

    $scope.slides = slides;
    $scope.inlines = inlines;
    $scope.videos = videos;
    $scope.ads = ads;

    $scope.colorCycle = function( index ) {
      return myServices.svcColorCycle( [ "pastelA", "pastelB", "pastelC", "pastelB", "pastelC" ], index );
    };

  }]);
