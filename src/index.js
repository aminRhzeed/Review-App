import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App'

// ReactDom.render(<h1>MyApp</h1>, document.getElementById('root'))
// ReactDom.render(<App/>, document.getElementById('root'))
ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, document.getElementById('root')
)