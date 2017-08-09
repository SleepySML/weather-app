import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import AllCities from './AllCities';
import {connect} from 'react-redux';



class City extends React.Component{
    render(){
        return (
            <div>
                {
                    !this.props.cityStore ? (<div>Sorry, but the city was not found</div>)
                        :
                        <div>
                            <h1>{this.props.cityStore}</h1>
                            <Link to='/cities'>Back</Link>
                        </div>
                }

            </div>
        );
    }
}

export default connect(
    state => ({
        cityStore: state
    }),
    dispatch =>({})
)(AllCities);
