import React from 'react';
import {sendRequest} from '../../utils/Utils';
import './homePage.scss';



const mapDegreesToDirection = (d)=>{
    if(d>=348.75||d<11.25){
        return "N";
    }
    else if(d>=11.25&&d<33.75){
        return "NNE";
    }
    else if(d>=33.75&&d<78.75){
        return "ENE";
    }
    else if(d>=78.75&&d<101.25){
        return "E";
    }
    else if(d>=101.25&&d<123.75){
        return "ESE";
    }
    else if(d>=123.75&&d<146.25){
        return "SE";
    }
    else if(d>=146.25&&d<168.75){
        return "SSE";
    }
    else if(d>=168.75&&d<191.25){
        return "S";
    }
    else if(d>=191.25&&d<213.75){
        return "SSW";
    }
    else if(d>=213.75&&d<236.25){
        return "SW";
    }
    else if(d>=236.25&&d<258.75){
        return "WSW";
    }
    else if(d>=258.75&&d<281.25){
        return "W";
    }
    else if(d>=281.25&&d<303.75){
        return "WNW";
    }
    else if(d>=303.75&&d<326.25){
        return "NW";
    }
    else if(d>=326.25&&d<348.75){
        return "NNW";
    }
};

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weatherObject: {}
        }
    }

    componentWillMount(){

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                (p)=>{
                    let requestString = `http://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=d0ccaafe09242f66f4a0869e4eb75161`;
                    sendRequest(requestString, {
                    success: (resp)=> {
                        console.log(resp);
                        this.setState({ weatherObject: resp})
                    },
                });}
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
                    this.state.weatherObject.name ?
                        (
                        <div>
                            <span>{`Weather in ${this.state.weatherObject.name}`}</span>


                            <div className="flex-wrapper">
                                <div className="flex-title">
                                    <div className="title-description">
                                        <img src={`http://openweathermap.org/img/w/${this.state.weatherObject.weather[0].icon}.png`} alt="weather"/>
                                        <span>{`${this.state.weatherObject.main.humidity}°F`}</span>
                                    </div>

                                    <table className="table">
                                        <tbody>
                                        <tr className="table-row">
                                            <td className="table-cell">Wind</td>
                                            <td className="table-cell">{mapDegreesToDirection(this.state.weatherObject.wind.speed)}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Cloudiness</td>
                                            <td className="table-cell">{this.state.weatherObject.weather[0].description}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Pressure</td>
                                            <td className="table-cell">{this.state.weatherObject.main.pressure}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Humidity</td>
                                            <td className="table-cell">{this.state.weatherObject.main.humidity}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Sunrise</td>
                                            <td className="table-cell">{Date.parse(this.state.weatherObject.sys.sunrise)}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Sunset</td>
                                            <td className="table-cell">4</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Geo coords</td>
                                            <td className="table-cell">{`[${this.state.weatherObject.coord.lat}, ${this.state.weatherObject.coord.lon}]`}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="main-table">
                                    <span>13 day weather forecast</span>
                                    <table className="table thirteen-table">
                                        <tbody>
                                        <tr className="table-row">
                                            <td className="table-cell">Wind</td>
                                            <td className="table-cell">{mapDegreesToDirection(this.state.weatherObject.wind.speed)}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Cloudiness</td>
                                            <td className="table-cell">{this.state.weatherObject.weather[0].description}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Pressure</td>
                                            <td className="table-cell">{this.state.weatherObject.main.pressure}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Humidity</td>
                                            <td className="table-cell">{this.state.weatherObject.main.humidity}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Sunrise</td>
                                            <td className="table-cell">{Date.parse(this.state.weatherObject.sys.sunrise)}</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Sunset</td>
                                            <td className="table-cell">4</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-cell">Geo coords</td>
                                            <td className="table-cell">4</td>
                                        </tr>
                                        </tbody>
                                    </table>
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