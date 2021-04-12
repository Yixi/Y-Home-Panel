import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Parse from 'parse'
import App from './App'
import './style/index.scss'

Parse.initialize('YixiHome')
// @ts-ignore
Parse.serverURL='http://192.168.50.9:2337/parse'

ReactDOM.render(<App />, document.getElementById('App'))
