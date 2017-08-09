import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AllCities from './AllCities';
//import {LocalStorageAPI} from '../../utils/Localstorage';


/*const City = (props) => {

    const city = LocalStorageAPI.get(
        parseInt(props.match.params.number, 10)
    );
    if (!city) {
        return <div>Sorry, but the city was not found</div>
    }
    return (
        <div>
            <h1>{city.name} (#{city.number})</h1>
            <Link to='/cities'>Back</Link>
        </div>
    )
};*/


class Cities extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/cities' component={AllCities}/>
            </Switch>
        );
    }
}

export default Cities;
/*<Route path='/cities/:number' component={City}/>*/