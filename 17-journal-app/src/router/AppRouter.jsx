import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '@Auth/routes'
import { JournalRoutes } from '@Journal/routes'

function AppRouter() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}

export default AppRouter
