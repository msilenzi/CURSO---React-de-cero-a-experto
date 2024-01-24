import { heroes } from '@Data/heroes'
import { isValidPublisher } from '@Utils'

function getHeroesByPublisher(publisher) {
  if (!isValidPublisher(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`)
  }

  return heroes.filter((hero) => hero.publisher === publisher)
}

export { getHeroesByPublisher }
