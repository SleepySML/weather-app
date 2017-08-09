import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const initialState = [];

for (let key in localStorage) {
    initialState.push(localStorage[key]);
}

function reducer(state = initialState, action){
    if(action.type==='ADD_CITY'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
