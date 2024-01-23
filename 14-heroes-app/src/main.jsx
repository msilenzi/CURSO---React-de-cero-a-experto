import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'
import App from 'App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
