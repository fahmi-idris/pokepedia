import React from 'react';
import registerServiceWorker from './Infrastructure/serviceWorker';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './Application/Reducers';
import rootSaga from './Application/Sagas';

import { render } from 'react-dom';
import App from './Application/App';

import "./Application/Assets/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);
registerServiceWorker();
