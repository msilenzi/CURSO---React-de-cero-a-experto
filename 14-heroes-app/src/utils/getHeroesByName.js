import { heroes } from '@Data/heroes'

function getHeroesByName(name) {
  name = name.toLowerCase()
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name))
}

export { getHeroesByName }
