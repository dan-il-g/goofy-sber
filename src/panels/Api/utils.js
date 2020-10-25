import React from "react";

function getWeekDay() {
    let date = new Date();
    return r(date.getDay());
}

function r(g){
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[(g % days.length)]
}

function getTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
}

export function getTimeByObject(schedule){
    console.log("schedule", schedule);
    function zzz(a){
        if (a !== undefined){
            console.log("A, a", a);
            let s = a.length - 1;
            if (a[s] !== undefined){
                return a[s].to;
            }
        }
        return ""
    }
    let a = getWeekDay();
    if (schedule[a].working_hours !== undefined){
        let time_ = zzz(schedule[a].working_hours);
        if (time_ !== ""){
            return "Открыто до " + time_
        }
    }
    return ""

}

export const Stars = ({rating}) => {
    console.log("rating:", rating);
    const Star = ({isHide}) => {
        const url = process.env.PUBLIC_URL;
        let star = "star-fill.svg";
        if (isHide){
            star = "star.svg"
        }
        star = process.env.PUBLIC_URL + "/logos/" + star;
        return (
            <img className="star-item" src={star} alt={"star"}/>
        )
    }
    let digit = Math.round(rating);
    let items = []
    for (let i = 1; i <= 5; i++){
        items.push(digit <= 0);
        digit -= 1;
    }
    console.log(items);
    items = items.map((i) => {return <Star isHide={i}/>});
    return (
        <div className={"Stars"}>
            {items}
            <p className="star-item text">{rating.toFixed(1)}</p>
        </div>
    )
}

export function Icons(icons){
    const Icon = ({path, link}) => {
        if ((link !== undefined) && (link !== null)){
            return (
                <div onClick={() => {
                    window.open(link);
                }} className="socials">
                    <img className="socials__icon" src={process.env.PUBLIC_URL + "/logos/more/" + path} alt="MoreIcon"/>
                </div>
            )
        }
        return ("")
    }
    let vk = (<Icon path={"vk.svg"} link={icons.vkontakte}/>);
    let inst = (<Icon path={"inst.svg"} link={icons.instagram}/>);
    let phone = (<Icon path={"phone.svg"} link={"tel:"+icons.phone}/>);
    return [vk, inst, phone]
}