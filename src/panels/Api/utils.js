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
    let time_ = zzz(schedule[a].working_hours);
    if (time_ !== ""){
        return "Открыто до " + time_
    }
    return ""
}