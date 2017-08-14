import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getWeatherByCityName,getForecastByCityName} from '../../actions/weather'
import SideTable from '../common/Tables/SideTable';
import ForecastTable from '../common/Tables/ForecastTable';
import './city.scss'



class City extends React.Component{
    componentWillMount(){
        this.props.addWeatherTable(this.props.match.params.name);
        this.props.addForecastTable(this.props.match.params.name);
    }

    render(){

        const city = this.props.match.params.name;
        if (!city) {
            return <div>Sorry, but the city was not found</div>
        }
        return (
            <div>
                <div className="btn-back">
                    <div className="btn">
                        <Link to='/cities'>Back</Link>
                    </div>
                </div>

                {
                    this.props.weather.tables.weatherObject && this.props.forecast.tables.forecastObject ?
                        <div className="city-wrapper">

                            <div className="city-weather">
                                <div className="">
                                    <h2>{`Weather in ${this.props.weather.tables.weatherObject.name}`}</h2>
                                </div>
                                <div className="city-w-desc">
                                    <div className="">
                                        <img src={`http://openweathermap.org/img/w/${this.props.weather.tables.weatherObject.weather[0].icon}.png`} alt="weather"/>
                                    </div>
                                    <div className="flex-block">
                                        <span>{`${(this.props.weather.tables.weatherObject.main.temp - 273.15).toFixed(1)}°C`}</span>
                                    </div>
                                </div>
                                <SideTable weatherObject={this.props.weather.tables.weatherObject}/>
                            </div>

                            <div className="city-forecast">
                                <h2>13 day weather forecast</h2>
                                <ForecastTable forecastObject={this.props.forecast.tables.forecastObject}/>
                            </div>
                        </div>
                        :
                        <div>
                            <span>Крутилка</span>
                        </div>
                }

            </div>
        );
    }
}

export default  connect(
    state => (
        {
            weather: state,
            forecast: state,
        }
    ),
    dispatch =>(
        {
            addWeatherTable: (cityName) =>{
                dispatch(getWeatherByCityName(cityName));
            },
            addForecastTable: (cityName) =>{
                dispatch(getForecastByCityName(cityName));
            }
        }
    )
)(City);
