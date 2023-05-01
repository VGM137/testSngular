import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './routes/App.js';

const initialState = {
  seriesValue: 0
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)

const root = ReactDOM.createRoot(document.getElementById("app"))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
