import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const expectedUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }
    expect(getUser()).toStrictEqual(expectedUser)
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const expected = {
      uid: 'ABC567',
      username: 'nombre',
    }
    expect(getUsuarioActivo('nombre')).toStrictEqual(expected)
  })
})
