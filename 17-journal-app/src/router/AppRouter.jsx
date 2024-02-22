import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '@Components/ui'
import { AuthRoutes } from '@Auth/routes'
import { JournalRoutes } from '@Journal/routes'
import { useCheckAuth } from '@Hooks'

function AppRouter() {
  const { status } = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AppRouter
