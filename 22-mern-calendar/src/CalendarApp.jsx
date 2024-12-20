import { AppRouter } from '@Router'
import { store } from '@Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

function CalendarApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default CalendarApp
