import React from 'react';
import {Link} from 'react-router-dom';
import {LocalStorageAPI} from '../../utils/Localstorage';
import {connect} from 'react-redux';


class AllCities extends React.Component{
    constructor(props){
        super(props);
        this.DeleteCity=this.DeleteCity.bind(this);
        this.state = {
            redirect: false,
        }

    }

    AddCity(){
        LocalStorageAPI.set(this.cityInput.value);

        this.props.onAddCity(this.cityInput.value);
        this.cityInput.value = '';
    }

    DeleteCity(cityName){
        console.log(cityName);
        LocalStorageAPI.remove(cityName);
        this.props.onDeleteCity(cityName);
    }

    render(){
        return (
            <div>
                <input type="text" ref={(input)=> {this.cityInput = input}}/>
                <button id="add-city-button" onClick={this.AddCity.bind(this)}>Add</button>
                <ul>
                    {
                        this.props.cityStore.cities.map((city) => (
                            <div key={city} >
                                <li>
                                    <Link to={`/cities/${city}`}>{city}</Link>
                                </li>
                                <input type="submit" value="Remove" onClick={() => this.DeleteCity(city)}/>
                            </div>
                        ))
                    }
                </ul>
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
            },
            onDeleteCity:(cityName)=>{
                dispatch({type:'DELETE_CITY', payload: cityName});
            }
        }
    )
)(AllCities);
