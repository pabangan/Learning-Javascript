(function (window, mapster) {

    // Map options
    var mapOPTIONS = mapster.MAP_OPTIONS;

        // The map itself.
        var element = document.getElementById('map-canvas');  // Element, is what the map will load inside of.
        map = mapster.create(element, mapOPTIONS);
        map.zoom(10);
        alert(map.zoom());

        google.maps.event.addListener(map.gMap, 'click', function (e){
            alert('click');
            console.log(e);
        });

}(window, window.Mapster));

/**
 * This is a Popup that is called below in the button.
 */
function test2() {
    alert("TEST NUMBER 222222.");
}