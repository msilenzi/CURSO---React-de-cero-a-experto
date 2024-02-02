import { Navigate, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { DcPage, HeroById, MarvelPage, Search } from '@Pages'
import { SiteNavbar } from '@Components/ui'

function HeroesRouter() {
  return (
    <>
      <SiteNavbar />

      <Container>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<HeroById />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </Container>
    </>
  )
}

export { HeroesRouter }
