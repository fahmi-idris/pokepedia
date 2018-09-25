import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application/App';
import "./Application/Assets/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './Infrastructure/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
