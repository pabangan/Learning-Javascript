// This is where the map variable is declared. The name of the actual google map is call "gMap".
// Learned that self invoking functions are something are functions that occur automatically without being called.
// I'll probably try to stay away from the self invoking functions until I know their full functionality.

var gMap;

(function (window, google) {

    var Mapster = (function () {
        // Constructor in the self invoking function.
        function Mapster(element, opts) {
            gMap = new google.maps.Map(element, opts);
        }

        Mapster.prototype = {
            zoom: function (level) {
                if(level)
                {
                    this.gMap.setZoom(level);
                }
                else
                {
                    return this.gMap.getZoom();
                }
            },
            
            /*
            _on: function(event, callback)
            {
                var self = this;
                google.maps.event.addListener(this.gMap, event, function (e) {
                    callback.call(self,e);                    
                });
            },
            */

            addMarker: function (lat, lng) {
                this._createMarker(lat, lng);
            },
            
            _createMarker: function (lat, lng) {
                var opts = {
                    position: {
                                    lat: lat,
                                    lng: lng
                              },
                    map: this.gMap
                };
                return new google.maps.Marker(opts);
            }
            
        };
        return Mapster;
    }());

    Mapster.create = function (element, opts) {
        return new Mapster(element, opts);
    };

    window.Mapster = Mapster;

}(window, google));