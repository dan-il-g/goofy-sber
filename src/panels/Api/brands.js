import DG from "2gis-maps";

const Category =  {
    "аптека": "apteka.png",
    "обувь": "shoes.png",
    "одежда": "shirt.png",
    "для спорта": "sport.png",
    "для дома": "home.png",
    "строительные": "hammer.png",
    "кафе": "kafe.png",
    "парикмахерская": "cut.png",
    "продукты": "shop.png"
};

const Brand = {
    "пятерочка": "5.png",
    "кировский": "kirovsky.png",
    "монетка": "monetka.png",
    "макдоналдс": "macdonalds.png",
    "kfc": "kfc.png",
    "спортмастер": "sportmaster.png",
    "nike": "nike.png",
    "newbalance": "nb.png",
    "new-balance": "nb.png",
    "галамарт": "gala.png",
    "dodo": "dodo.png",
    "вилкаложка": "vilka.png",
    "вилка ложка": "vilka.png",
    "живика": "zhivika.png",
    "кузьма": "kuzma.png",
    "hm": "hm.png",
    "икеа": "ikea.png",
    "ikea": "ikea.png",
    "леруа": "lerua.png"
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
        iconSize: [22, 22],
        iconAnchor: [22, 22]
    });
    return myIcon
}

export default GetIcon;
