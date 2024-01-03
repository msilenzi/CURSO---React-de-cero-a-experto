import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default CategorySearch
