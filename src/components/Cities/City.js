import React from 'react';
import {Link} from 'react-router-dom';



class City extends React.Component{

    render(){

        const city = this.props.match.params.name;
        if (!city) {
            return <div>Sorry, but the city was not found</div>
        }
        return (
            <div>
                <h1>{city}</h1>
                <Link to='/cities'>Back</Link>
            </div>
        );
    }
}

export default City;
