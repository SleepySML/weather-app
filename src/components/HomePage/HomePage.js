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
                <h1 className="search-title">You can find any city</h1>
                <div className="search-block">
                    <input type="text" className="search-input" ref={(input)=> {this.searchCityInput = input}}/>
                    <button id="search-button" onClick={()=>this.onSearchClick(this.searchCityInput.value)}>Search</button>
                </div>
                <hr/>
                {
                    this.props.weather.tables.weatherObject && this.props.forecast.tables.forecastObject ?
                        (
                        <div className="content">
                            <div className="city-name-block">
                                <h2>{`Weather in ${this.props.weather.tables.weatherObject.name}`}</h2>
                                <button id="add-to-list-button" onClick={()=>this.onAddToFavorites(this.props.weather.tables.weatherObject.name)}>+</button>
                            </div>
                            <div className="flex-wrapper">
                                <div className="flex-title">
                                    <div className="title-description">
                                        <div className="flex-block">
                                            <img src={`http://openweathermap.org/img/w/${this.props.weather.tables.weatherObject.weather[0].icon}.png`} alt="weather"/>
                                        </div>
                                        <div className="flex-block">
                                            <span>{`${(this.props.weather.tables.weatherObject.main.temp - 273.15).toFixed(1)}°C`}</span>
                                        </div>


                                    </div>
                                    <SideTable weatherObject={this.props.weather.tables.weatherObject}/>
                                </div>

                                <div className="flex-forecast-table">
                                    <h2>13 day weather forecast</h2>
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