import React from 'react';
import {Link} from 'react-router-dom';
import {LocalStorageAPI} from '../../utils/Localstorage';
import {connect} from 'react-redux';
import './citiesPage.scss'


class AllCities extends React.Component{
    constructor(props){
        super(props);
        this.DeleteCity=this.DeleteCity.bind(this);

    }

    componentWillMount(){
        this.props.onAddCity("");
    }

    DeleteCity(cityName){
        LocalStorageAPI.remove(cityName);
        this.props.onDeleteCity(cityName);
    }

    render(){
        return (
            <div className="cities-list-wrapper">
                <ul className="cities-list">
                    {
                        this.props.cityStore.cities.map((city) => (
                            <li key={city} >
                                <div className="nav-link">
                                    <Link to={`/cities/${city}`}>{city}</Link>
                                </div>
                                <input type="submit" value="X" onClick={() => this.DeleteCity(city)}/>
                            </li>
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
            onAddCity: () =>{
                dispatch({type:'ADD_CITY', payload: ""});
            },
            onDeleteCity:(cityName)=>{
                dispatch({type:'DELETE_CITY', payload: cityName});
            }
        }
    )
)(AllCities);
