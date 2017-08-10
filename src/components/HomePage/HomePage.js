import React from 'react';
import {sendRequest} from '../../utils/Utils';
import './homePage.scss';
import SideTable from '../common/Tables/SideTable';
import ForecastTable from '../common/Tables/ForecastTable'

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weatherObject: {},
            forecastObject: {}
        }
    }

    componentWillMount(){

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                (p)=>{
                    let requestWeatherString = `http://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
                    sendRequest(requestWeatherString, {
                        success: (resp)=> {
                            this.setState({ weatherObject: resp})
                        },
                    });

                    let requesForecastString = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
                    sendRequest(requesForecastString, {
                        success: (resp) => {
                            this.setState({forecastObject: resp});
                        }
                    });


                }
            )
        }
    else {
            console.log("навигация недоступна");
        }

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                (p)=>{

                }
            )
        }
        else {
            console.log("навигация недоступна");
        }



    }

    render(){
        return (
            <main className="main-wrapper">
                {
                    this.state.weatherObject.name&&this.state.forecastObject.cod ?
                        (
                        <div>
                            <span>{`Weather in ${this.state.weatherObject.name}`}</span>
                            <div className="flex-wrapper">
                                <div className="flex-title">
                                    <div className="title-description">
                                        <img src={`http://openweathermap.org/img/w/${this.state.weatherObject.weather[0].icon}.png`} alt="weather"/>
                                        <span>{`${this.state.weatherObject.main.temp - 273.15}°C`}</span>
                                    </div>
                                    <SideTable weatherObject={this.state.weatherObject}/>
                                </div>

                                <div className="main-table">
                                    <span>13 day weather forecast</span>
                                    <ForecastTable forecastObject={this.state.forecastObject}/>
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

export default HomePage;

//     <table className="table">
//     <tbody>
//     <tr className="table-row">
//         <td className="table-cell">Wind</td>
//         <td className="table-cell">{mapDegreesToDirection(this.state.weatherObject.wind.speed)}</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Cloudiness</td>
//         <td className="table-cell">{this.state.weatherObject.weather[0].description}</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Pressure</td>
//         <td className="table-cell">{this.state.weatherObject.main.pressure}</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Humidity</td>
//         <td className="table-cell">{this.state.weatherObject.main.humidity}</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Sunrise</td>
//         <td className="table-cell">{Date.parse(this.state.weatherObject.sys.sunrise)}</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Sunset</td>
//         <td className="table-cell">4</td>
//     </tr>
//     <tr className="table-row">
//         <td className="table-cell">Geo coords</td>
//         <td className="table-cell">{`[${this.state.weatherObject.coord.lat}, ${this.state.weatherObject.coord.lon}]`}</td>
//     </tr>
//     </tbody>
// </table>