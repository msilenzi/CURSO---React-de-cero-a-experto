import { JournalPage } from '@Journal/pages'
import { Navigate, Route, Routes } from 'react-router-dom'

function JournalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
export default JournalRoutes
