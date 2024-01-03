import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp'
import FirstApp from './FirstApp'
import CounterApp from './CounterApp'

import 'src/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp subtitle={'1234'} /> */}
    <CounterApp initialValue={0} />
  </React.StrictMode>
)
