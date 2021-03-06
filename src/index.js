import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//components
import { HashRouter as Router } from 'react-router-dom'
//creating an alias for HashRouter to change into {BrowserRouter} at a later time
import { Provider } from 'react-redux'
import store from './Redux/store'

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
