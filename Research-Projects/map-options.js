(function (window, google, mapster) {

    var iowaCity = new google.maps.LatLng(41.6611, -91.5301);
    mapster.MAP_OPTIONS = {
        center: iowaCity,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
}(window, google, window.Mapster || (window.Mapster = {}))); // The OR allows pretty much says that if the Mapster object doesn't exist, create an empty one.