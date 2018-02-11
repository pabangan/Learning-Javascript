(function (window, google, mapster) {

    mapster.MAP_OPTIONS = {
        center: {lat:41.619549,lng: -93.598022},
        zoom: 8
    };

}(window, google, window.Mapster || (window.Mapster = {}))); // The OR allows pretty much says that if the Mapster object doesn't exist, create an empty one.