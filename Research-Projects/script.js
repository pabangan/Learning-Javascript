var map;

(function (window, mapster) {

    // Map options
    var iowaCity = new google.maps.LatLng(41.6611, -91.5301);
    var mapOPTIONS = mapster.MAP_OPTIONS;

        // The map itself.
        var element = document.getElementById('map-canvas');
        map = mapster.create(element, mapOPTIONS);
        map.zoom(10);
        alert(map.zoom());

        google.maps.event.addListener(map.gMap, 'click', function (e){
            alert('click');
            console.log(e);
        });

        /*
        var marker = new google.maps.Marker({
            position: iowaCity,
            map: map.gMap,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10
            }
        });
        */

    /**
     * This is a Popup that is called below in the button.
     */
    function test2() {
        alert("TEST NUMBER 222222.");
    }

       // map.addMarker(iowaCity);

}(window, window.Mapster));

/**
 * This is a Popup that is called below in the button.
 */
function test2() {
    alert("TEST NUMBER 222222.");
}

map.addMarker(iowaCity);