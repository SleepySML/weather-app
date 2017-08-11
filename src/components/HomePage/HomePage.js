import React from 'react';
import './homePage.scss';
import SideTable from '../common/Tables/SideTable';
import ForecastTable from '../common/Tables/ForecastTable';
import {connect} from 'react-redux';
import {getWeather, getForecast} from '../../actions/weather';

class HomePage extends React.Component{

    componentWillMount() {

        if (navigator.geolocation) {

            this.props.addWeatherTable();
            this.props.addForecastTable();
        }
    }

    render(){
        return (
            <main className="main-wrapper">
                {
                    this.props.weather.tables.weatherObject && this.props.forecast.tables.forecastObject ?
                        (
                        <div>
                            <span>{`Weather in ${this.props.weather.tables.weatherObject.name}`}</span>
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
            addWeatherTable: () =>{
                dispatch(getWeather());
            },
            addForecastTable: () =>{
                dispatch(getForecast());
            }
        }
    )
)(HomePage);