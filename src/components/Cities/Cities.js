import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AllCities from './AllCities';
import City from './City';

class Cities extends React.Component{
    render(){
        return (
            <div>
                <Route exact path='/cities' component={AllCities}/>
                <Switch>
                    <Route path='/cities/:name' component={City}/>
                </Switch>
            </div>

        );
    }
}

export default Cities;
