/* eslint-disable no-unused-vars */
import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
// STORE --> GLOBALIZED STATE

// ACTION --> DESCRIBES WHAT YOU ARE GOING TO DO [IT DOES NOT MEAN ACTUALLY DOING THE ACTION, IT JUST DESCRIBES IT]
const increment = () => {
  return {
    type: "INCEREMENT"
  };
};
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER --> DEFINES HOW THE ACTIONS TRANSFORM THE STATES INTO THE NEXT STATE [TAKES CARE OF ALL THE ACTIONS]
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCEREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

// Display it in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH --> ACTION IS EXECUTED HERE
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());


// Reducer is going to check what action you did and based on that it is going to modify the STORE.
// We DISPATCH the ACTION to the REDUCER and the REDUCER checks what to do and based on that, the STORE gets updated

*/

// const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {/* Provider will give all the components access to the store(GLOBAL STATE) */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
