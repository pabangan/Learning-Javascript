// This is going to be file that contains functions for creating a marker.
// Also contains City Data.

/**
 * Function for creating a marker based off of city, and size of marker as input parameters.
 */
function addMarker(latlng, size)
{
    "use strict";
    var mark;
    mark = new google.maps.Marker({
        path: google.maps.SymbolPath.CIRCLE,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: size
        },
        title: 'Hello',
        position: latlng,
        map: gMap
    });
    mark.setOptions({'opacity': 0.5});
}

var desMoines =
    {
        name:"Des Moines",
        population:215328,
        area:75.8,
        temp:21,
        lat:41.619549,
        long:-93.598022,
        mapPosition: new google.maps.LatLng(41.619549, -93.598022), // For some reason, cant use this.lat || this.long
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello',
            position: {lat: 41.619549, lng: -93.598022},
            map: gMap
        })
    };

var iowaCity =
    {
        name:"Iowa City",
        population:74384,
        area:24.2,
        temp:25,
        lat:41.6611,
        long:-91.5301,
        mapPosition: new google.maps.LatLng(41.6611, -91.5301),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10
    };

var allCities = [desMoines, iowaCity];

function allCityMarkers(option)
{
    gMap
    var i;
    switch (option)
    {
        case 1:
            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizePopulation);
            }
            break;
        case 2:
            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizeArea);
            }
            break;
        default:
            alert("Error Occurred!")
    }
}
