import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Auth'
import { CalendarPage } from '@Calendar'
import { useAuthStore } from '@Hooks'
import { useEffect } from 'react'

function AppRouter() {
  const { status, checkToken } = useAuthStore()

  useEffect(() => {
    checkToken()
  }, [checkToken])

  if (status === 'checking') {
    return <h3>Loading...</h3>
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
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
