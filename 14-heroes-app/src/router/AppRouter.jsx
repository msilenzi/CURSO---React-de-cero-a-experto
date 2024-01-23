import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Pages'
import { HeroesRouter } from '@Router'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRouter />} />
      </Routes>
    </>
  )
}

export { AppRouter }
