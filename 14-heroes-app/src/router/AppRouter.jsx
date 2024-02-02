import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Pages'
import { HeroesRouter, PrivateRouter } from '@Router'
import { PublicRouter } from './PublicRouter'

function AppRouter() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRouter>
            <HeroesRouter />
          </PrivateRouter>
        }
      />
    </Routes>
  )
}

export { AppRouter }
