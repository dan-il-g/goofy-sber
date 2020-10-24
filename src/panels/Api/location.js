import publicIp from 'public-ip';
import DG from '2gis-maps'
import GetIcon from "./brands";

async function getIp(){
    return publicIp.v4();
}

async function getLocation_by_ip(ip){
    const url = "https://eugene.gubanov.site/r.php?ip=";
    let response = await fetch(url + ip);
    let resp = await response.json();
    return {
        "lat": parseFloat(resp["latitude"]),
        "lng": parseFloat(resp["longitude"])
    }
}

async function ApiSetLocation(){
    const ip = await getIp();
    return await getLocation_by_ip(ip);
}

function geoFindMe(hook) {
    let a = null
    let b = null

    function success(position) {
        const lat  = position.coords.latitude;
        const lng = position.coords.longitude;
        a = lat
        b = lng
        console.log("success", lat, lng);
        hook(a, b);
    }

    function error() {
        alert("Errno");
        return [null, null]
    }

    if(!navigator.geolocation) {
        alert("Поддержки нет!");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function viewPoint(dg_map, lat=null, lng=null, zoom=null){
    if ((lat === null) && (lng === null)){

    } else{
        dg_map.setView(
            [lat, lng],
        );
    }
    if (zoom === null){}
    else {
        dg_map.setZoom(
            zoom
        );
    }
}

function setResetMyLocation(dg_map, lat, lng){
    let markers = DG.featureGroup();
    function getScreenLocation(){
        const url = process.env.PUBLIC_URL;
        let myIcon = DG.icon({
            iconUrl: url + "/logos/self_locate.png",
            iconRetinaUrl: url + "/logos/self_locate.png",
            iconSize: [28, 28],
            iconAnchor: [28, 28]
        });
        return myIcon;
    }

    DG.marker(
        [lat, lng],
        {icon: getScreenLocation()}
    ).addTo(
        markers
    );
    function showMarkers() {
        markers.addTo(
            dg_map
        );
        dg_map.fitBounds(
            markers.getBounds()
        );
    }

    function hideMarkers() {
        markers.removeFrom(
            dg_map
        );
    }
    return [showMarkers, hideMarkers];
}

function addMarkers(dg_map, coordinates_array, category){
    let markers = DG.featureGroup()
    for (let i = 0; i < coordinates_array.length; i++) {
        let coordinates = coordinates_array[i];
        try{
            DG.marker(
                [coordinates.point.lat, coordinates.point.lon],
                {icon: GetIcon(
                        category,
                        coordinates.name,
                    )}
            ).addTo(
                markers
            );
        } catch (e) {
            console.log(coordinates.point);
            console.log("O", i, e);
        }
    }

    function showMarkers() {
        markers.addTo(
            dg_map
        );
        dg_map.fitBounds(
            markers.getBounds()
        );
    }

    function hideMarkers() {
        markers.removeFrom(
            dg_map
        );
    }
    return [showMarkers, hideMarkers];
}

const Apiloc = {
    getIp,
    getLocation_by_ip,
    ApiSetLocation,
    geoFindMe,
    viewPoint,
    addMarkers,
    setResetMyLocation
}
export default Apiloc;
