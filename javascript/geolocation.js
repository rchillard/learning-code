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