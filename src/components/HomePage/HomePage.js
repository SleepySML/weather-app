import React from 'react';
import './homePage.scss';
import SideTable from '../common/Tables/SideTable';
import ForecastTable from '../common/Tables/ForecastTable';
import {connect} from 'react-redux';
import {getWeather, getForecast} from '../../actions/weather';
import {getWeatherByCityName,getForecastByCityName} from '../../actions/weather';
import {LocalStorageAPI} from '../../utils/Localstorage'

class HomePage extends React.Component{
    constructor(){
        super();
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onAddToFavorites = this.onAddToFavorites.bind(this);
    }

    componentWillMount() {

        if (navigator.geolocation) {

            this.props.addWeatherTable();
            this.props.addForecastTable();
        }
    }

    onSearchClick(cityName){
        this.props.addWeatherTable(cityName);
        this.props.addWeatherTable(cityName);
    }

    onAddToFavorites(cityName){
        LocalStorageAPI.set(cityName);
    }

    render(){
        return (
            <main className="main-wrapper">
                <input type="text" ref={(input)=> {this.searchCityInput = input}}/>
                <button onClick={()=>this.onSearchClick(this.searchCityInput.value)}>Search</button>
                {
                    this.props.weather.tables.weatherObject && this.props.forecast.tables.forecastObject ?
                        (
                        <div>
                            <span>{`Weather in ${this.props.weather.tables.weatherObject.name}`}</span>
                            <button onClick={()=>this.onAddToFavorites(this.props.weather.tables.weatherObject.name)}>+</button>
                            <div className="flex-wrapper">
                                <div className="flex-title">
                                    <div className="title-description">
                                        <img src={`http://openweathermap.org/img/w/${this.props.weather.tables.weatherObject.weather[0].icon}.png`} alt="weather"/>
                                        <span>{`${this.props.weather.tables.weatherObject.main.temp - 273.15}°C`}</span>
                                    </div>
                                    <SideTable weatherObject={this.props.weather.tables.weatherObject}/>
                                </div>

                                <div className="main-table">
                                    <span>13 day weather forecast</span>
                                    <ForecastTable forecastObject={this.props.forecast.tables.forecastObject}/>
                                </div>
                            </div>
                        </div>
                        )
                        :
                        (<h1>{"Please, allow access to geolocation"}</h1>)
                }
            </main>
        );
    }
}

export default connect(
    state => (
        {
            weather: state,
            forecast: state,
        }
    ),
    dispatch =>(
        {
            addWeatherTable: (cityName) =>{
                if(cityName){
                    dispatch(getWeatherByCityName(cityName));
                }else {
                    dispatch(getWeather());
                }

            },
            addForecastTable: (cityName) =>{
                if(cityName){
                    dispatch(getForecastByCityName(cityName));
                }else {
                    dispatch(getForecast(cityName));
                }
            },
        }
    )
)(HomePage);