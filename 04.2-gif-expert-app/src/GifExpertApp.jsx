import { useState } from 'react'
import CategorySearch from './components/CategorySearch/CategorySearch'
import Header from './components/Header/Header'

function GifExpertApp() {
  const [categories, setCategories] = useState([])

  function addCategory(category) {
    const index = categories.indexOf(category)
    if (index === -1) {
      setCategories([category, ...categories])
    } else {
      setCategories([category, ...categories.toSpliced(index, 1)])
    }
  }

  return (
    <>
      <Header />
      <CategorySearch addCategory={addCategory} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
