import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Auth'
import { CalendarPage } from '@Calendar'

const authStatus = 'not-authenticated'
// const authStatus = 'authenticated'

function AppRouter() {
  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <>
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
