import publicIp from 'public-ip';

async function getIp(){
    return publicIp.v4();
}

async function getLocation_by_ip(ip){
    const url = "http://api.ipstack.com/";
    const token = "?access_key=00e9145d568b06b0c9caea2cc01c5b66";
    let response = await fetch(url + ip + token);
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
        let r = navigator.geolocation.getCurrentPosition(success, error);
        console.log("r:", r);
    }
    console.log([a, b]);
    return [a, b]
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

const Apiloc = {
    getIp,
    getLocation_by_ip,
    ApiSetLocation,
    geoFindMe,
    viewPoint
}
export default Apiloc;
