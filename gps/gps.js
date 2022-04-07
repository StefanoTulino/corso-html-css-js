
function show(posizione) {
    console.log("Latitud:" + posizione.coords.latitude);
    console.log("Long:" + posizione.coords.longitude);
    console.log("Speed:" + posizione.coords.speed);

    document.getElementById('alt').innerHTML =posizione.coords.latitude;
    document.getElementById('long').innerHTML =posizione.coords.longitude;
}


if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        show, null, {
            enableHighAccuracy:true,
            maximumAge: 60000,
            timeout: 2000
        }
    )
}