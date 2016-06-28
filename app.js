import "babel-polyfill"; // required to allow Promise etc in IE
import LogMonitor from 'redux-devtools-log-monitor';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './redux';
import App from './containers/App';
import './site.scss';

window.myDebug = require('debug');
window.myDebug.enable('trader*');

const reducer = combineReducers({
  ...reducers
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultPosition='bottom'>
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const isProduction = process.env.NODE_ENV == 'production';

const instrument = isProduction ? undefined : DevTools.instrument();

const store = createStore(
  reducer,
  instrument,
  applyMiddleware(thunkMiddleware)
);

var devToolsComponent = isProduction ? <span></span> : <DevTools />;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);