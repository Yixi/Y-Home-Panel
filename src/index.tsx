import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './style/index.scss'
import parse from 'parse'

parse.initialize('YixiHome')
parse.serverURL='http://192.168.50.9:2337/parse'

ReactDOM.render(<App />, document.getElementById('App'))
