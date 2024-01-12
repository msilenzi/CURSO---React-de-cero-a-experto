import PropTypes from 'prop-types'
import { useState } from 'react'

import './CategorySearch.css'

function CategorySearch({ addCategory }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedSearch = searchValue.trim()
    if (trimmedSearch <= 1) return
    addCategory(trimmedSearch)
    setSearchValue('')
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value)
  }

  return (
    <main className="container">
      <form
        className="category-search"
        onSubmit={handleSubmit}
        aria-label="form"
      >
        <input
          type="text"
          placeholder="Buscar gifs"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn--primary">
          <img src="/arrow-right.svg" alt="Search icon" />
        </button>
      </form>
    </main>
  )
}

CategorySearch.propTypes = {
  addCategory: PropTypes.func.isRequired,
}

export default CategorySearch
