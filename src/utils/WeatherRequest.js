import {sendRequest} from './Utils';

//const urlPrefix = "http://172.18.19.59/Atomic.Auth.Service/";
const urlPrefix = "http://samples.openweathermap.org";

class Weather {
    static GetCurrentWeather(currentPlace, success, error) {
        sendRequest(urlPrefix + "/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1", {
            method: "GET",
            type: "application/x-www-form-urlencoded",
            data: {
            },
            success: function(res) {
                console.log(res);
            },
            error: function(err, res) {
                error && error(res);
            }
        });
    }
}

export default Weather;
