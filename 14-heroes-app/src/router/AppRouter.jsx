import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Pages'
import { HeroesRouter } from '@Router'

function AppRouter() {
  return (
    <div className="bg-body-tertiary" style={{minHeight: '100vh'}}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRouter />} />
      </Routes>
    </div>
  )
}

export { AppRouter }
