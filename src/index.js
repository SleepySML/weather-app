import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import reducer from './reducers';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
