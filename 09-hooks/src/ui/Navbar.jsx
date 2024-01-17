import PropTypes from 'prop-types'

function Navbar({ selectedValue, setSelectedValue, mainComponents }) {
  return (
    <nav className="navbar navbar-expand-xl shadow-sm bg-white">
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className='bg-dark text-white p-1 rounded-2'>Hooks</span>{' '}
          <span className="text-muted">{selectedValue}</span>
        </span>
        <button
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {mainComponents.map((component) => (
              <NavItem
                key={component}
                itemValue={component}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ itemValue, selectedValue, setSelectedValue }) {
  return (
    <li className="nav-item">
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
}

export default Navbar
