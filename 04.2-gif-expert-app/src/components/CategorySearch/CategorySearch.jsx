import { useState } from 'react'

import './CategorySearch.css'

function CategorySearch({ addCategory }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedSearch = searchValue.trim()
    if (trimmedSearch <= 1) return
    addCategory(searchValue)
    setSearchValue('')
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value)
  }

  return (
    <main className="container">
      <form className="category-search" onSubmit={handleSubmit}>
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

export default CategorySearch
