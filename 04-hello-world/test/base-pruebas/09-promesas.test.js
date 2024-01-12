import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('Pruebas en 09-promesas', () => {
  test('getHeroesByIdAsync debe retornar un héroe', (done) => {
    const id = 1
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' })
      done()
    })
  })

  test('getHeroesByIdAsync debe retornar un error por id inexistente', (done) => {
    const id = -1
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toStrictEqual(`No se pudo encontrar el héroe con id ${id}`)
      done()
    })
  })
})
