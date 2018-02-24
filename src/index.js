import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import {createStore} from 'redux';


ReactDOM.render(
  <Provider store={createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App/>
  </Provider>,
  document.getElementById("root")
);