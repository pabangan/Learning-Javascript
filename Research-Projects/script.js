(function (window, mapster) {

    // Map options
    var iowaCity = new google.maps.LatLng(41.6611, -91.5301);
    var mapOPTIONS = mapster.MAP_OPTIONS;

        // The map itself.
        var element = document.getElementById('map-canvas');
        var map = mapster.create(element, mapOPTIONS);
        map.zoom(10);
        alert(map.zoom());

        map._on('click', function(){
            alert('click');
        });

        /*
        var marker = new google.maps.Marker({
        position: iowaCity,
        map: map.gMap,
        title: 'Hello World!'
    });
         */

}(window, window.Mapster));