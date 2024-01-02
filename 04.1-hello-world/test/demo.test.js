describe('Pruebas en el archivo demo.test.js', () => {
  test('los strings deben ser iguales', () => {
    // 1. Inicialización
    const actual = 'Hola Mundo'
  
    // 2. Estímulo
    const expected = 'Hola Mundo'
  
    // 3. Observar el comportamiento
    expect(actual).toBe(expected)
  })
})