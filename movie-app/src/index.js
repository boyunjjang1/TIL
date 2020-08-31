import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from './modules/reducers'
import {composeWithDevTools} from "redux-devtools-extension/index";


const store = createStore(reducers, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

