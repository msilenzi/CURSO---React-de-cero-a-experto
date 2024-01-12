import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp'

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1
    const hero = getHeroeById(id)
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe retornar undefined', () => {
    const id = -1
    expect(getHeroeById(id)).toBeUndefined()
  })

  test('getHeroesByOwner debe retornar los héroes de DC', () => {
    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)
    const expected = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]
    expect(heroes.length).toStrictEqual(3)
    expect(heroes).toStrictEqual(expected)
  })

  test('getHeroesByOwner debe retornar los héroes de Marvel', () => {
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)
    expect(heroes.length).toStrictEqual(2)
    expect(heroes).toStrictEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
})
