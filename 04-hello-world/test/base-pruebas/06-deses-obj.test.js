import { usContext } from '../../src/base-pruebas/06-deses-obj'

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {
    const expected = {
      nombreClave: 'foo',
      nombre: 'bar',
      rango: 'Capitán',
      anios: 30,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    }

    expect(usContext({ clave: 'foo', nombre: 'bar', edad: 30 })).toStrictEqual(
      expected
    )
  })
})
