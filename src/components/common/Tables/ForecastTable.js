import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapUnixToDate} from '../../../utils/UnixDate'




class SideTable extends Component {


    render() {
        return (

            <table className="table">
                <tbody>
                {
                    this.props.forecastObject.list.map( (day) => (
                        <tr key={day.dt} className="table-row">
                            <td className="table-cell">
                                <span>{ mapUnixToDate(day.dt,["month","date"]) }</span>
                                <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather"/>
                            </td>
                            <td className="table-cell">
                                <div>{day.temp.max}</div>
                                <div>{day.temp.min}</div>
                                <div>{day.weather[0].description}</div>
                                <div>{day.speed + "m/s"}</div>
                                <div>{"clouds: " + day.clouds + " %"}</div>
                                <div>{ day.pressure + " hpa"}</div>

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