import React, {useEffect, useState} from 'react';

function limitStr(str, n, symb='...') {
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

let CategoryShops = [
    ["Аптека.png", "Аптека", "Реклама, если есть"],
    ["Аптека.png", "Мусор"],
    ["Аптека.png", "Хлеб"],
    ["Аптека.png", "Аптека", "Реклама, если есть"],
]

const CategotyListItem = ({row, hook}) => {
    console.log(row);
    const url = process.env.PUBLIC_URL + "/logos/";
    let ads = ""
    if (row[2] !== undefined){
        ads = (
            <p className="gray-color">{row[2]}</p>
        )
    }
    return (
        <div onClick={() => {
            hook(row[1].toLowerCase());
        }} className="category-list_item">
            <div>
                <img src={url + row[0]}></img>
                <div className="text">
                    <p>{row[1]}</p>
                    {ads}
                </div>
            </div>
        </div>
    )
}
export const CategoryList = ({hook}) => {
    let all = CategoryShops.map((item) => {return <CategotyListItem hook={hook} row={item}/>});
    return (
        <div className="category-list">{all}</div>
    )
}

const SearchListItem = ({row, hook}) => {
    console.log(row);
    const url = process.env.PUBLIC_URL + "/logos/";
    let distance = "";
    if ((row.distance.text !== undefined) && (row.distance.text !== "")){
        distance = (
            <p className="gray-color">{row.distance.text}</p>
        )
    }
    return (
        <div onClick={() => {
            hook(row[1].toLowerCase());
        }} className="category-list_item">
            <div>
                <img src={url + "close.svg"}></img>
                <div className="text">
                    <p>{limitStr(row.name, 27)}</p>
                    <p className="gray-color">{row.address_name}</p>
                </div>
            </div>
            {distance}
        </div>
    )
}
export const SearchList = ({data, hook}) => {
    try{
        let all = data.map((item) => {return <SearchListItem hook={hook} row={item}/>});
        return (
            <div className="category-list">{all}</div>
        )
    } catch (e) {
        return (
            <div className="category-list">
                ...
            </div>
        )
    }

}

export const ViewPanel = ({hook}) => {
    const url = process.env.PUBLIC_URL + "/logos/";
    const [classPopUp, setClassPopUp] = useState("popupClose");
    const [UserInput, setUserInput] = useState("");
    const [classPopUpAll, setClassPopUpAll] = useState(true);
    const [DataQuery, setDataQuery] = useState([]);
    const [isMoreItem, setIsMoreItem] = useState(false);
    const openClass = "popupOpen";
    const closeClass = "popupClose";
    function Trigger(){
        if ((classPopUp === openClass) || (classPopUp === "")){
            PopupState("close");
        } else {
            if (classPopUp === closeClass){
                if (classPopUpAll){
                    PopupState("open");
                } else {
                    PopupState("");
                }

            }
        }
    }
    function PopupState(new_state){
        console.log("new_state:", new_state);
        if (new_state === "open"){
            setClassPopUp(openClass);
        } else {
            if (new_state === "close"){
                setClassPopUp(closeClass);
            } else {
                setClassPopUp("");
            }
        }
    }

    async function getDataByQuery(q){
        if (q === ""){
            setUserInput("");
            setClassPopUpAll(true);
            setDataQuery([]);
            // setIsMoreItem(false);
        } else {
            setUserInput(q);
            let data = await hook(q);
            setDataQuery(data);
            console.log("search", data);
        }

    }
    let ViewList = ""
    if (UserInput === ""){
        ViewList = (
            <div className="popup-container">
                <h1 className="gray-color">Категории</h1>
                <CategoryList hook={getDataByQuery}/>
            </div>
        )
    } else {
        if (isMoreItem){
            //
        } else {
            ViewList = (
                <div className="popup-container">
                    <SearchList data={DataQuery}/>
                </div>
            )
        }
    }
    return (
        <div id="popup-trigger-one" className={"popup p-full border-radius " + classPopUp}>
        <div onClick={Trigger} className="separating-line"></div>
        <div className="popup-container">
            <div className="search-box">
                <img className='search-box_img' src={url + "search.svg"} alt="search"></img>
                <input
                    onClick={() => {PopupState("open")}}
                    onChange={(e) => {
                        let value = e.target.value;
                        getDataByQuery(value);
                    }}
                    placeholder="Введите место или адрес"/>
                <img className='search-box_img' src={url + "close.svg"} alt="close"></img>
            </div>
        </div>
        <div className="separating-line"></div>
            {ViewList}
    </div>
    )
}