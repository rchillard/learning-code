function success(position) {
    // https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
    var coordinates = position.coords;
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude : ${coordinates.longitude}`);
    console.log(`Time : ${position.timestamp}`);

}

function error(error) {
    console.warn(error);
}

// Request access to location
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
navigator.geolocation.getCurrentPosition(success, error);

// https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
options = {
    enableHighAccuracy: true, // requests best possible results (may consume battery)
    timeout: 10000,           // maximum amount of time (in ms) device may take to return a position (default is infinity)
    maximumAge: 30000         // maximum amount of time (in ms) of a possible cached position that is acceptable to return
}

// Request access to watch the user's location
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
navigator.geolocation.watchPosition(success, error, options);