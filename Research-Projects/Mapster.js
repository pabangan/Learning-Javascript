(function (window, google) {

    var Mapster = (function () {
        // Constructor in the self invoking function.
        function Mapster(element, opts) {
            this.gMap = new google.maps.Map(element, opts);
        }

        Mapster.prototype = {
            zoom: function (level) {
                if(level)
                {
                    this.gMap.zoom(level);
                }
                else
                {
                    return this.gMap.getZoom();
                }
            },
            _on: function (event, callback) {
                var self = this;
                google.maps.event.addListener(this.gMap, event, callback);
            }
        };
        return Mapster;
    }());

    Mapster.create = function (element, opts) {
        return new Mapster(element, opts);
    };

    window.Mapster = Mapster;

}(window, google));