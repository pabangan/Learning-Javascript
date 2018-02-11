// This is going to be file that contains functions for creating a marker.
// Also contains City Data.

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
        // The map should still be able show this, even if the script is at the end.
        marker: new google.maps.Marker({
            title: 'Hello Des Moines',
            position: {lat: 41.619549, lng: -93.598022},
            map: gMap
        })
    };

var cedarRapids =
    {
        name:"Cedar Rapids",
        population:131118,
        area:63.1,
        temp:20,
        lat:41.977879,
        long:-91.665627,
        mapPosition: new google.maps.LatLng(41.977879, -91.665627), // For some reason, cant use this.lat || this.long
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        // The map should still be able show this, even if the script is at the end.
        marker: new google.maps.Marker({
            title: 'Hello Des Moines',
            position: {lat: 41.977879, lng: -91.665627},
            map: gMap
        })
    };

var davenport =
    {
        name:"Davenport",
        population:102608,
        area:62.8,
        temp:15,
        lat:41.5219,
        long:-90.5758,
        mapPosition: new google.maps.LatLng(41.5219, -90.5758), // For some reason, cant use this.lat || this.long
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        // The map should still be able show this, even if the script is at the end.
        marker: new google.maps.Marker({
            title: 'Hello Des Moines',
            position: {lat: 41.5219, lng: -90.5758},
            map: gMap
        })
    };

var siouxCity =
    {
        name:"Sioux City",
        population:82105,
        area:54.8,
        temp:10,
        lat:42.4961,
        long:-96.4083,
        mapPosition: new google.maps.LatLng(42.4961, -96.4083), // For some reason, cant use this.lat || this.long
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        // The map should still be able show this, even if the script is at the end.
        marker: new google.maps.Marker({
            title: 'Hello Des Moines',
            position: {lat: 42.4961, lng: -96.4083},
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
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 41.6611, lng: -91.5301},
            map: gMap
        })
    };

var waterloo =
    {
        name:"Waterloo",
        population:67940,
        area:60.7,
        temp: 9,
        lat:42.4944,
        long:-92.3389,
        mapPosition: new google.maps.LatLng(42.4944, -92.3389),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 42.4944, lng: -92.3389},
            map: gMap
        })
    };

var ames =
    {
        name:"Ames",
        population:66190,
        area:21.6,
        temp: 10,
        lat:42.0317,
        long:-93.6167,
        mapPosition: new google.maps.LatLng(42.0317, -93.6167),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 42.0317, lng: -93.6167},
            map: gMap
        })
    };

var westDesMoines =
    {
        name:"West Des Moines",
        population:63325,
        area:26.8,
        temp: 12,
        lat:41.577210,
        long:-93.711330,
        mapPosition: new google.maps.LatLng(41.577210, -93.711330),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 41.577210, lng: -93.711330},
            map: gMap
        })
    };

var councilBluffs =
    {
        name:"Council Bluffs",
        population:62245,
        area:37.4,
        temp: 13,
        lat:41.2617,
        long:-95.8650,
        mapPosition: new google.maps.LatLng(41.2617, -95.8650),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 41.2617, lng: -95.8650},
            map: gMap
        })
    };

var urbandale =
    {
        name:"Urbandale",
        population:43150,
        area:20.7,
        temp: 12,
        lat:41.6266667,
        long:-93.7119444,
        mapPosition: new google.maps.LatLng(41.6266667, -93.7119444),
        sizePopulation: 40,
        sizeDensity: 30,
        sizeArea: 20,
        sizeTemp: 10,
        marker: new google.maps.Marker({
            title: 'Hello Iowa City',
            position: {lat: 41.6266667, lng: -93.7119444},
            map: gMap
        })
    };

var allCities = [desMoines, cedarRapids, davenport, siouxCity, iowaCity, waterloo, ames, westDesMoines, councilBluffs, urbandale];


/**
 * Function for creating a marker based off of city, and size of marker as input parameters.
 * */
function addMarker(latlng, size, city)
{
    "use strict";
    city.marker.setMap(null);
    city.marker = new google.maps.Marker({
        path: google.maps.SymbolPath.CIRCLE,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: size
        },
        title: 'Hello',
        position: city.mapPosition,
        map: gMap
    });
    city.marker.setOptions({'opacity': 0.5});
}



// This function now works
function allCityMarkers(option)
{
    var i;

    switch (option)
    {
        case 1:

            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizePopulation,allCities[i]);
            }
            break;

        case 2:
            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizeDensity, allCities[i]);
            }
            break;
        case 3:
            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizeArea, allCities[i]);
            }
            break;
        case 4:
            for (i=0; i<allCities.length; i++)
            {
                addMarker(allCities[i].mapPosition, allCities[i].sizeTemp, allCities[i]);
            }
            break;
        default:
            alert("Error Occurred!")
    }
}
