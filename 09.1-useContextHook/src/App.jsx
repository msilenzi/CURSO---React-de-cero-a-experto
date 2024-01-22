import { Navigate, Route, Routes } from 'react-router-dom'
import SiteNavbar from '@Components/SiteNavbar'
import About from '@Pages/About'
import Home from '@Pages/Home'
import Login from '@Pages/Login'
import UserProvider from '@Context/UserProvider'

function App() {
  return (
    <UserProvider>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/about'} />} />
      </Routes>
    </UserProvider>
  )
}

export default App
