/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: {
        lat: 43.16236611586341,
        lng: -77.61296849877716
      },
    });
  
    setMarkers(map);
  }
  
  
  const shopLocations = [
    ["Native Pride", 42.571940, -79.093800, 4],
    ["Hemp Sol CBD", 43.086570, -77.591850, 5],
    ["Puff and Stay", 42.861240, -78.819460, 3],
    ["Wubs and Renee's Dispensary", 42.573000, -79.089240, 2],
    ["Canni Blue Dreams Cafe", 41.48687596672476, -74.09319521381806, 1],
    ["Green Merchant Hydroponics", 42.33473672369875, -77.32514023068265, 6],
    ["Dank Nugs", 42.99057050030272, -78.67733504647133, 7],
    ["Cannibus", 41.50517876709643, -74.0725377758348, 9],
    ["CC's CannaCreations", 43.05994208856656, -76.20098057392826, 8],
       ];
  
  function setMarkers(map) {
    // Adds markers to the map.
    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    const image = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
  
    for (let i = 0; i < shopLocations.length; i++) {
      const shop = shopLocations[i];
  
      new google.maps.Marker({
        position: {
          lat: shop[1],
          lng: shop[2]
        },
        map,
        icon: image,
        shape: shape,
        title: shop[0],
        zIndex: shop[3],
      });
    }
  }
  
  window.initMap = initMap;
  