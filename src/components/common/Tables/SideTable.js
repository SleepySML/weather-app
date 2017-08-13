import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapDegreesToDirection} from './TableUtils';
import './sideTable.scss';

class SideTable extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                <tr className="table-row">
                    <td className="table-cell">Wind</td>
                    <td className="table-cell">{mapDegreesToDirection(this.props.weatherObject.wind.speed)}</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Cloudiness</td>
                    <td className="table-cell">{this.props.weatherObject.weather[0].description}</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Pressure</td>
                    <td className="table-cell">{this.props.weatherObject.main.pressure}</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Humidity</td>
                    <td className="table-cell">{this.props.weatherObject.main.humidity}</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Sunrise</td>
                    <td className="table-cell">{Date.parse(this.props.weatherObject.sys.sunrise)}</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Sunset</td>
                    <td className="table-cell">4</td>
                </tr>
                <tr className="table-row">
                    <td className="table-cell">Geo coords</td>
                    <td className="table-cell">{`[${this.props.weatherObject.coord.lat}, ${this.props.weatherObject.coord.lon}]`}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

SideTable.propTypes = {
    weatherObject: PropTypes.object
};

export default SideTable;
