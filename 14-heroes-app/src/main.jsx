import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles.css'

import 'animate.css'
document.documentElement.style.setProperty('--animate-duration', '.75s');

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
