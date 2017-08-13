import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapUnixToDate} from '../../../utils/UnixDate'
import './forecstTable.scss';




class SideTable extends Component {


    render() {
        return (

            <table className="forecast-table">
                <tbody>
                {
                    this.props.forecastObject.list.map( (day) => (
                        <tr key={day.dt} className="table-row">
                            <td className="table-cell">
                                <div className="date-img">
                                    <div className="date">
                                        <span>{ mapUnixToDate(day.dt,["month","date"]) }</span>
                                    </div>
                                    <div className="img-cont">
                                        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather"/>
                                    </div>


                                </div>

                            </td>
                            <td className="table-cell">
                                <div className="flex-t-cont">
                                    <div className="temp-wrapper">
                                        <div className="temp min-temp"><span>{(day.temp.max  - 273.15).toFixed(1) +" °C"}</span></div>
                                        <div className="temp max-temp"><span>{(day.temp.min  - 273.15).toFixed(1)  + " °C"}</span></div>
                                        <div className="temp temp-description">{day.weather[0].description}</div>
                                    </div>

                                    <div className="wind-speed"><span>{day.speed + "m/s"}</span></div>
                                    <div className="cl-pres-desc">
                                        <div className="clouds-description"><span>{"clouds: " + day.clouds + "%"}</span></div>
                                        <div className="pressure"><span>{ day.pressure + " hpa"}</span></div>
                                    </div>

                                </div>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        );
    }
}

SideTable.propTypes = {
    forecastObject: PropTypes.object,
};

export default SideTable;