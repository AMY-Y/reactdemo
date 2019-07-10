import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/article'
import './index.css'
import App from './App'


const middleware=[thunk]
const store=createStore(
    reducer,
    applyMiddleware(...middleware)//applyMiddleware应用中间件。参数为中间件数组
)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
, 
document.getElementById('root'));


