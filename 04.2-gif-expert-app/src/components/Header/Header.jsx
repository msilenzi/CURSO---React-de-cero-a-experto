import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src="/gif-gradient.svg" alt="Gif icon" />
          <h1>GifExpertApp</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
