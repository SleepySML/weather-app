import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Cities from './components/Cities/Cities';
import Search from  './components/Search/Serach';
import {Switch, Route} from 'react-router-dom';

class Router extends React.Component{
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/cities' component={Cities}/>
                    <Route path='/search' component={Search}/>
                </Switch>
            </main>
        );
    }
}

export default Router;
