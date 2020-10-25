import React, {useEffect, useState} from 'react';
import {getTimeByObject} from "./Api/utils";

function limitStr(str, n, symb='...') {
    if (str.length <= n){
        return str
    }
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
    const url = process.env.PUBLIC_URL + "/logos/";
    let distance = "";
    if ((row.distance.text !== undefined) && (row.distance.text !== "")){
        distance = (
            <p className="gray-color">{row.distance.text}</p>
        )
    }
    return (
        <div onClick={() => {
            hook(row);
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
        let all = data.map((item, i) => {return <SearchListItem key={i} hook={hook} row={item}/>});
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

export const ViewPanel = ({hook, clearAllPoint}) => {
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
                    <SearchList data={DataQuery} hook={(item) => {
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
                    <div className="text gray-color">
                        <p>{schedule}</p>
                        {distance}
                    </div>
                    <div className="last-row">
                        <div className="buy-button">
                            <a>Заказать доставку</a>
                            <img src={url + "sber.svg"}></img>
                        </div>
                        <div className="socials">

                        </div>
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