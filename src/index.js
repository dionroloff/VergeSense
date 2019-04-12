import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import "antd/dist/antd.css";
import "./index.css";

import rootReducer from './redux/reducers'; 
// import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

// const sagaMiddleware = createSagaMiddleware();

// const middlewareList = process.env.NODE_ENV === 'development' ?
//   [sagaMiddleware, logger] :
//   [sagaMiddleware];

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
//   applyMiddleware(...middlewareList),
);


// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// ReactDOM.render(<App />, document.getElementById("root"));