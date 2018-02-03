(function (window, google) {

    // Map options
    var iowaCity = new google.maps.LatLng(41.6611, -91.5301);
    var mapOPTIONS = {
        center: iowaCity,
        zoom: 7
    },

        // The map itself.
        element = document.getElementById('map-canvas'),
        map = new google.maps.Map(element, mapOPTIONS)
}(window, google));