const KEY_GIS = "rugtio3557";

function deg2rad(deg) {
    return deg * (Math.PI/180)
}
function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2) {
    let R = 6371000; // Radius of the earth in m
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1);
    let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c; // Distance in m
    return d;
}
function distanceToString(a){
    if (a === null){
        return "";
    }
    if (a < 1000){
        return Math.round((a / 100).toFixed(1) * 100) + " м."
    }
    return (a / 1000).toFixed(2) + " км."
}


async function get_by_category(category, location, to_center=false, radius=2000, viewpoints=null){
    let base = new URL("https://catalog.api.2gis.com/3.0/items");
    base.searchParams.set("key", KEY_GIS);
    base.searchParams.set("locale", "ru_RU");
    base.searchParams.set("fields", [
        "items.point",
        "items.address",
        "items.reviews",
        "items.schedule",
        "items.contact_groups",
        "items.rubrics",
    ])
    base.searchParams.set("q", category);
    base.searchParams.set("sort_point", location[1] + "," + location[0])
    if (viewpoints !== null){
        base.searchParams.set("viewpoint1", viewpoints[0][1] + "," + viewpoints[0][0])
        base.searchParams.set("viewpoint2", viewpoints[0][1] + "," + viewpoints[0][0])
    }
    if ((to_center !== null) && (to_center)){
        base.searchParams.set("point", location[1] + "," + location[0])
    }
    base.searchParams.set("radius", parseInt(radius));
    console.log(base.toString());
    let response = await fetch(base.toString());
    let resp = await response.json();
    function add_distance(object){
        let distance = null;
        try{
            let lat1 = object.point.lat;
            let lng1 = object.point.lon;
            distance = getDistanceFromLatLonInM(lat1, lng1, location[0], location[1]);
        } catch (e){}
        finally {
            object.distance = {
                'text': distanceToString(distance),
                'distance': distance
            }
            return object
        }
    }
    function contacts(object){
        let allow_types = {
            phone: null,
            instagram: null,
            vkontakte: null,
        }
        object.contact_groups.forEach(elem => {
            elem.contacts.forEach(item => {
                if (allow_types[item.type] !== undefined){
                    allow_types[item.type] = item.value;
                }
            })
        })
        object.contact_groups = allow_types
        return object
    }
    function delivery(object){
        object.delivery = false
        object.rubrics.forEach((elem) => {
            if (elem.name !== undefined){
                let name = elem.name.toLowerCase()
                const s = "гипермаркетысупермаркетыпродуктымагазингипермаркетпродуктсупермаркетпятёрочкапятерочка";
                console.log(name);
                if (-1 !== s.indexOf(name)){
                    object.delivery = true;
                }
            }
        })
        return object
    }
    try{
        resp.result.items = resp.result.items.map(add_distance);
        resp.result.items = resp.result.items.map(contacts);
        resp.result.items = resp.result.items.map(delivery);
    } catch (e) {}
    return resp
}
const Gis = {
    get_by_category,
}
export default Gis;