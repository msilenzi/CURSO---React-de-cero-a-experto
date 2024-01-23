import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage, DcPage, LoginPage } from '@Pages'
import { SiteNavbar } from '@Components'

function AppRouter() {
  return (
    <>
      <SiteNavbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}

export { AppRouter }
