import { useState } from 'react'
import CategorySearch from './components/CategorySearch/CategorySearch'
import Header from './components/Header/Header'
import CategoryList from './components/CategoryList/CategoryList'
import Footer from './components/Footer/Footer'
import { fetchGifsByCategory, fetchGifsTrending } from './helpers/gifs'

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
      {categories.length === 0 ? (
        <CategoryList category="Trendings" fetcher={fetchGifsTrending} />
      ) : (
        categories.map((category) => (
          <CategoryList
            category={category}
            fetcher={() => fetchGifsByCategory(category)}
            key={category}
          />
        ))
      )}
      <Footer />
    </>
  )
}

export default GifExpertApp
