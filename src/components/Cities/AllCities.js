import React from 'react';
import {Link} from 'react-router-dom';
import {LocalStorageAPI} from '../../utils/Localstorage';
import {connect} from 'react-redux';


class AllCities extends React.Component{
    constructor(props){
        super(props);
        this.DeleteCity=this.DeleteCity.bind(this);

    }

    componentWillMount(){
        console.log("lol");
        this.props.onAddCity("");
    }

    AddCity(){

        this.props.onAddCity();
        this.cityInput.value = '';
    }

    DeleteCity(cityName){
        LocalStorageAPI.remove(cityName);
        this.props.onDeleteCity(cityName);
    }

    render(){
        return (
            <div>
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
            onAddCity: () =>{
                dispatch({type:'ADD_CITY', payload: ""});
            },
            onDeleteCity:(cityName)=>{
                dispatch({type:'DELETE_CITY', payload: cityName});
            }
        }
    )
)(AllCities);
