//react
import React from 'react';
import ReactDOM from 'react-dom';

//test2

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainAppContainer from './containers/MainAppContainer/MainAppContainer';
import rootReducer from './reducers';
import { initialState } from './constants/initialState';

injectTapEventPlugin();

//initial the state
var newInitialState = initialState;

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  newInitialState,
  applyMiddleware(
    thunkMiddleware,
    //loggerMiddleware
  )
)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <MainAppContainer/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
