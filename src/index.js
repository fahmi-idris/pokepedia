import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application/App';
import registerServiceWorker from './Infrastructure/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
