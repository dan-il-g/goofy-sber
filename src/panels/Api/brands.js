import DG from "2gis-maps";

const Category =  {
    "аптека": "apteka.png",
    "магазин": "shop.png"
};

const Brand = {
    "пятерочка": "5.png",
    "монетка": "monetka.png"
};

function GetName(name){
    name = name.toLowerCase();
    name = name.replace(" ", "");
    name = name.split(",");
    return name[0];
}

function GetAbsoluteUrl(category, name){
    const url = process.env.PUBLIC_URL;
    name = GetName(name);
    category = GetName(category);
    let absolute_url = url + "/logos/brands/";
    let name_url = Brand[name];
    if (name_url === undefined){
        name_url = Category[category]
        if (name_url === undefined){
            let default_ = "default.png";
            return absolute_url + default_;
        }
    }
    return absolute_url + name_url;
}

function GetIcon(category, name){
    let url = GetAbsoluteUrl(category, name);
    let myIcon = DG.icon({
        iconUrl: url,
        iconRetinaUrl: url,
        iconSize: [18, 18],
        iconAnchor: [20, 20]
    });
    return myIcon
}

export default GetIcon;
