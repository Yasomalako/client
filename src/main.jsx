import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
const usersArrayStor = createStore(rootReducer,{}, enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={usersArrayStor}>
    <App />
  </Provider>
)
