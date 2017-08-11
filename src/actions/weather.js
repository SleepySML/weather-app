import {sendRequest} from '../utils/Utils';

export const getWeather = ()=>(dispatch)=>{
        navigator.geolocation.getCurrentPosition(
            (p) => {
                let WeatherRequestString = `http://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
                sendRequest(WeatherRequestString, {
                    success: (resp) => {
                        dispatch({type:'ADD_WEATHER_TABLE', payload: resp});
                    },
                });
            }
        )
};

export const getForecast = ()=> (dispatch)=>{
        navigator.geolocation.getCurrentPosition(
            (p) => {
                let ForecastRequestString = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
                sendRequest(ForecastRequestString, {
                    success: (resp) => {
                        dispatch({type: 'ADD_FORECAST_TABLE', payload: resp});
                    },
                });
            }


        )
};


export const getWeatherByCityName = (cityName)=>(dispatch)=>{
    navigator.geolocation.getCurrentPosition(
        (p) => {
            let WeatherRequestString = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
            sendRequest(WeatherRequestString, {
                success: (resp) => {
                    dispatch({type:'ADD_WEATHER_TABLE', payload: resp});
                },
            });
        }
    )
};

export const getForecastByCityName = (cityName)=> (dispatch)=>{
    navigator.geolocation.getCurrentPosition(
        (p) => {
            let ForecastRequestString = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
            sendRequest(ForecastRequestString, {
                success: (resp) => {
                    dispatch({type: 'ADD_FORECAST_TABLE', payload: resp});
                },
            });
        }
    )
};