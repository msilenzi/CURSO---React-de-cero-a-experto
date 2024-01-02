import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp'
import FirstApp from './FirstApp'

import './main.css'
import CounterApp from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title={'Hello, World!'} subtitle={1234} /> */}
    <CounterApp initialValue={0} />
  </React.StrictMode>
)
