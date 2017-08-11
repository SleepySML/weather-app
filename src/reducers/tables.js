
const initialState = {};

export default function tables(state = initialState, action){
    if(action.type==='ADD_WEATHER_TABLE'){
        return {
            ...state,
            weatherObject:  action.payload
        };
    }
    else if(action.type==='ADD_FORECAST_TABLE'){
        return {
            ...state,
            forecastObject:  action.payload
        };
    }
    return state;
}

