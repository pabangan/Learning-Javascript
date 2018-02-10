(function (window, google, mapster) {

    mapster.MAP_OPTIONS = {
        center: {lat:41.6611,lng: -91.5301},
        zoom: 9
    };

}(window, google, window.Mapster || (window.Mapster = {}))); // The OR allows pretty much says that if the Mapster object doesn't exist, create an empty one.