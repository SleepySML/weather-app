export const mapUnixToDate = function(unixTimeStamp, dateProps=[]){
    let a = new Date(unixTimeStamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();

    let time = "";

    dateProps.map((prop)=>{
        switch (prop){
            case "year": time = time + " "+year; break;
            case "month": time = time + " "+month; break;
            case "date": time = time + " "+date; break;
            case "hour": time = time + " "+hour; break;
            case "min": time = time + " "+min; break;
            case "sec": time = time + " "+sec; break;
        }
    });
    return time || date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
};