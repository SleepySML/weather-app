import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getWeatherByCityName,getForecastByCityName} from '../../actions/weather'
import SideTable from '../common/Tables/SideTable';
import ForecastTable from '../common/Tables/ForecastTable';



class City extends React.Component{
    constructor(){
        super();
        this.state = {
            redirect: false,
        }
    }
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
                <Link to='/cities'>Back</Link>

                {
                    this.props.weather.tables.weatherObject && this.props.forecast.tables.forecastObject ?
                        <div>
                            <h1>{this.props.weather.tables.weatherObject.name}</h1>
                            <SideTable weatherObject={this.props.weather.tables.weatherObject}/>
                            <ForecastTable forecastObject={this.props.forecast.tables.forecastObject}/>
                        </div>
                        :
                        <div>
                            <span>Крутилка, bad request</span>
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
