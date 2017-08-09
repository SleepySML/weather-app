import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import reducer from './reducers';




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__&&
window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
