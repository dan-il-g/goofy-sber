import React, {useEffect, useState} from 'react';
import {getTimeByObject, Icons, Stars} from "./Api/utils";
import Apiloc from "./Api/location";

function limitStr(str, n, symb='...') {
    if (str.length <= n){
        return str
    }
    if (!n && !symb) return str;
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

let CategoryShops = [
    ["shop.svg", "Продукты"],
    ["shoes.svg", "Обувь"],
    ["macdonalds.svg", "Макдональдс", "Реклама"],
    ["shirt.svg", "Одежда"],
    ["sport.svg", "Спорт товары"],
    ["home.svg", "Товара для дома"],
    ["hammer.svg", "Строительные"],
    ["sber.svg", "Заказать продукты на дом", "Реклама", "https://sbermarket.ru/"],
    ["apteka.svg", "Аптеки"],
    ["eat.svg", "Кафе"],
]

export function getCategoryIconInSearchByQuery(query){
    let url = process.env.PUBLIC_URL + "/logos/category/";
    let default_ = url + "default.svg";
    CategoryShops.forEach((elem) => {
        if (query == elem[1].toLowerCase()){
            default_ = url + elem[0];
        }
    });
    return default_
}

const CategotyListItem = ({row, hook}) => {
    const url = process.env.PUBLIC_URL + "/logos/category/";
    let ads = ""
    if (row[2] !== undefined){
        ads = (
            <p className="gray-color">{row[2]}</p>
        )
    }
    return (
        <div onClick={() => {
            if (row[3] !== undefined){
                window.open(row[3]);
            } else {
                hook(row[1].toLowerCase())
            }
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

const SearchListItem = ({row, hook, querySearch}) => {
    console.log("querySearch:", querySearch);
    const url = process.env.PUBLIC_URL + "/logos/";
    let distance = "";
    if ((row.distance.text !== undefined) && (row.distance.text !== "")){
        distance = (
            <p className="gray-color">{row.distance.text}</p>
        )
    }
    let src_icon = getCategoryIconInSearchByQuery(querySearch);
    return (
        <div onClick={() => {
            hook(row);
        }} className="category-list_item">
            <div>
                <img src={src_icon}></img>
                <div className="text">
                    <p>{limitStr(row.name, 27)}</p>
                    <p className="gray-color">{row.address_name}</p>
                </div>
            </div>
            {distance}
        </div>
    )
}
export const SearchList = ({data, hook, querySearch}) => {
    try{
        let all = data.map((item, i) => {return <SearchListItem querySearch={querySearch} key={i} hook={hook} row={item}/>});
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

export const ViewPanel = ({hook, clearAllPoint, focusPoint}) => {
    const url = process.env.PUBLIC_URL + "/logos/";
    const [classPopUp, setClassPopUp] = useState("popupClose");
    const [UserInput, setUserInput] = useState("");
    const [classPopUpAll, setClassPopUpAll] = useState(true);
    const [DataQuery, setDataQuery] = useState([]);
    const [isMoreItem, setIsMoreItem] = useState(false);
    const [MoreData, setMoreData] = useState(null);
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
    function Clear(value){
        let a = document.getElementById("you-input-search-box");
        a.value = value;
        clearAllPoint[0]();
    }

    async function getDataByQuery(q){
        if (q === ""){
            setUserInput("");
            setClassPopUpAll(true);
            setDataQuery([]);
            Clear("");
            // setIsMoreItem(false);
        } else {
            setUserInput(q);
            let data = await hook(q);
            setDataQuery(data);
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
        {
            ViewList = (
                <div className="popup-container">
                    <SearchList querySearch={UserInput} data={DataQuery} hook={(item) => {
                        focusPoint(item);
                        setMoreData(item);
                        setIsMoreItem(true);
                        setClassPopUpAll(false);
                    }}/>
                </div>
            )
        }
    }
    if ((isMoreItem) && (MoreData !== null) && (MoreData !== undefined)){
        console.log(MoreData);
        let distance = "";
        if ((MoreData.distance.text !== undefined) && (MoreData.distance.text !== "")){
            distance = (<p>{MoreData.distance.text}</p>)
        }

        let schedule = "";
        if (MoreData.schedule !== undefined){
            schedule = getTimeByObject(MoreData.schedule)
            console.log(">>>", schedule);
        }
        let icons = Icons(MoreData.contact_groups);
        let delivery = MoreData.delivery ? "show" : "unshow";
        return (
            <div id="popup-trigger-one" className="popup p-full border-radius">
                <div className="p-small">
                    <div className="name-row">
                        <div className="text">
                            <p>{MoreData.name}</p>
                            <p className="gray-color">{MoreData.address_name}</p>
                        </div>
                        <img onClick={() => {
                            setIsMoreItem(false);
                            setMoreData(null);
                            setClassPopUpAll(true);
                        }} src={url + "close.svg"} alt="close"></img>
                    </div>
                    <div className="text gray-color stars">
                        <Stars rating={MoreData.reviews.general_rating}/>
                    </div>
                    <div className="text gray-color">
                        <p>{schedule}</p>
                        {distance}
                    </div>
                    <div className="last-row">
                        <div onClick={() => {
                            if (delivery == "show"){
                                window.open("https://sbermarket.ru/");
                            }
                        }} className={"buy-button " + delivery}>
                            <a>Заказать доставку</a>
                            <img src={url + "sber.svg"}></img>
                        </div>
                        {icons[0]}
                        {icons[1]}
                        {icons[2]}
                    </div>
                </div>

            </div>
        )
    } {
        return (
            <div id="popup-trigger-one" className={"popup p-full border-radius " + classPopUp}>
                <div onClick={Trigger} className="separating-line"></div>
                <div className="popup-container">
                    <div className="search-box">
                        <img className='search-box_img' src={url + "search.svg"} alt="search"></img>
                        <input
                            id="you-input-search-box"
                            onClick={() => {PopupState("open")}}
                            onChange={(e) => {
                                let value = e.target.value;
                                getDataByQuery(value);
                            }}
                            placeholder="Введите место или адрес"/>
                        <img onClick={() => {
                            getDataByQuery("");
                        }} className='search-box_img' src={url + "close.svg"} alt="close"></img>
                    </div>
                </div>
                <div className="separating-line"></div>
                {ViewList}
            </div>
        )
    }

}