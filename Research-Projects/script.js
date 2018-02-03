(function (window, mapster) {

    // Map options
    var iowaCity = new google.maps.LatLng(41.6611, -91.5301);
    var mapOPTIONS = mapster.MAP_OPTIONS

        // The map itself.
        element = document.getElementById('map-canvas'),
        map = new mapster.create(element, mapOPTIONS);
        map.zoom(10);
        alert(map.zoom());

}(window, window.Mapster));