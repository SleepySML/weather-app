import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Cities from './components/Cities/Cities';
import {Switch, Route} from 'react-router-dom';

class Router extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/cities' component={Cities}/>
                </Switch>
            </main>
        );
    }
}

export default Router;
