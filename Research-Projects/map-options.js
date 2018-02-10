(function (window, google, mapster) {

    mapster.MAP_OPTIONS = {
        center: iowaCity.mapPosition,
        zoom: 7
    };

}(window, google, window.Mapster || (window.Mapster = {}))); // The OR allows pretty much says that if the Mapster object doesn't exist, create an empty one.