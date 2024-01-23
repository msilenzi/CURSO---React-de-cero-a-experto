import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '@Pages/Marvel'
import DcPage from '@Pages/DC'
import LoginPage from 'pages/Login/index.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="marvel" element={<MarvelPage />} />
      <Route path="dc" element={<DcPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/marvel" />} />
    </Routes>
  )
}
export default AppRouter
