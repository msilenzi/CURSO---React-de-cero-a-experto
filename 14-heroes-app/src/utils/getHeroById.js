import { heroes } from '@Data/heroes'

function getHeroById(id) {
  return heroes.find((hero) => hero.id === id)
}

export { getHeroById }
