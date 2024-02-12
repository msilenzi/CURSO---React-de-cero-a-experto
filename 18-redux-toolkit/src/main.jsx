import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Counter } from 'features/counter/components'
import { Pokemon } from 'features/pokemon/components'

import 'index.css'

const components = { Counter, Pokemon }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <components.Pokemon />
    </Provider>
  </React.StrictMode>
)
