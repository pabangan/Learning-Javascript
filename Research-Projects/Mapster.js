// This is where the map variable is declared. The name of the actual google map is call "gMap".
// Learned that self invoking functions are something are functions that occur automatically without being called.
// I'll probably try to stay away from the self invoking functions until I know their full functionality.

var gMap;

/**
 * A function that:
 * Initializes gMap.
 *
 */
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
            }
        };
        return Mapster;
    }());

    // This is a function that creates a whole map object. Will only be used once in this case, because I only have
    // one map.
    Mapster.create = function (element, opts) {
        return new Mapster(element, opts);
    };
    /**
     * Interesting... So I'm not sure but I think that a self invoking function automatically calls itself and then,
     * interestingly, returns a value.
     */

    // What "Mapster" is, is the entire entity that contains a map object and the characteristics of it... I think.
    window.Mapster = Mapster;

}(window, google));