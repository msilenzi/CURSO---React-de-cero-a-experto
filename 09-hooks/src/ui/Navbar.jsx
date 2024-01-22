import PropTypes from 'prop-types'
import { useRef } from 'react'

function Navbar({ selectedValue, setSelectedValue, mainComponents }) {
  const navButtonRef = useRef(null)
  const linksContainerRef = useRef(null)

  function collapseNav() {
    navButtonRef.current.classList.add('collapsed')
    linksContainerRef.current.classList.remove('show')
  }

  return (
    <nav className="navbar navbar-expand-xxl fixed-top shadow-sm bg-white">
      <div className="container-fluid">
        <span
          className="navbar-brand"
          style={{ cursor: 'pointer' }}
          onClick={collapseNav}
        >
          <span className="bg-dark text-white p-1 rounded-2">Hooks</span>{' '}
          <span className="text-muted">{selectedValue}</span>
        </span>
        <button
          ref={navButtonRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={linksContainerRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {mainComponents.map((component) => (
              <NavItem
                key={component}
                itemValue={component}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                onClick={collapseNav}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ itemValue, selectedValue, setSelectedValue, onClick }) {
  return (
    <li className="nav-item" onClick={onClick}>
      <input
        type="radio"
        className="d-none"
        name="component"
        value={itemValue}
        id={itemValue}
        checked={itemValue === selectedValue}
        onChange={() => setSelectedValue(itemValue)}
      />
      <label
        htmlFor={itemValue}
        className={`nav-link ${itemValue === selectedValue ? 'active' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        {itemValue}
      </label>
    </li>
  )
}

Navbar.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  mainComponents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

NavItem.propTypes = {
  itemValue: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Navbar
