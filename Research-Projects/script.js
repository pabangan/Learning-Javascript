(function (window, mapster) {

    // Map options
    var mapOPTIONS = mapster.MAP_OPTIONS;

        // The map itself.
        var element = document.getElementById('map-canvas');  // Element, is what the map will load inside of.
        map = mapster.create(element, mapOPTIONS);
        map.zoom(0);
        alert(map.zoom());

        //This listener isn't working anymore
        google.maps.event.addListener(map.gMap, 'click', function (e){
            alert('click');
            console.log(e);
        });

}(window, window.Mapster));