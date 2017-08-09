import React from 'react';
import {Link} from 'react-router-dom';
import {LocalStorageAPI} from '../../utils/Localstorage';
import {connect} from 'react-redux';


class AllCities extends React.Component{

    AddCity(){

        /*LocalStorageAPI.set(0,"Moscow");
        console.log(LocalStorageAPI.get(0));*/


        console.log(this.cityInput.value);
        this.props.onAddCity(this.cityInput.value);

    };

    render(){
        console.log(this.props.cityStore);
        return (
            <div>
                <ul>
                    {
                        this.props.cityStore.map((city,index) => (
                            <li key={index}>
                                <Link to={`/cities/${city}`}>{city}</Link>
                            </li>
                        ))
                    }
                </ul>

                <input type="text" ref={(input)=> {this.cityInput = input}}/>
                <button id="add-city-button" onClick={this.AddCity.bind(this)}>Add</button>
            </div>
        );
    }
}

export default connect(
    state => (
        {
            cityStore: state
        }
    ),
    dispatch =>(
        {
            onAddCity: (cityName) =>{
                dispatch({type:'ADD_CITY', payload: cityName});
            }
        }
    )
)(AllCities);
