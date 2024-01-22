import { act, renderHook } from '@testing-library/react'
import { useCounter } from '@Hooks'

describe('Pruebas en useCounter', () => {
  test('debe establecer el valor inicial correctamente', () => {
    const { result } = renderHook(() => useCounter(10))
    expect(result.current.counter).toBe(10)
    expect(result.current.increment).toBeFunction()
    expect(result.current.decrement).toBeFunction()
    expect(result.current.reset).toBeFunction()
  })

  test('debe incrementar el contador correctamente', () => {
    const { result } = renderHook(() => useCounter(10))
    act(() => result.current.increment())
    expect(result.current.counter).toBe(11)
  })

  test('debe decrementar el contador correctamente', () => {
    const { result } = renderHook(() => useCounter(10))
    act(() => result.current.decrement())
    expect(result.current.counter).toBe(9)
  })

  test('debe resetear el contador correctamente', () => {
    const { result } = renderHook(() => useCounter(10))

    act(() => {
      result.current.increment()
      result.current.increment()
    })
    expect(result.current.counter).toBe(12)

    act(() => result.current.reset())
    expect(result.current.counter).toBe(10)
  })

  test('no debe superar el valor máximo', () => {
    const { result } = renderHook(() => useCounter(10, { max: 12 }))
    act(() => {
      result.current.increment() // 11
      result.current.increment() // 12
      result.current.increment() // 12 (limitado)
    })
    expect(result.current.counter).toBe(12)
  })

  test('no debe superar el valor mínimo', () => {
    const { result } = renderHook(() => useCounter(10, { min: 8 }))
    act(() => {
      result.current.decrement() // 9
      result.current.decrement() // 8
      result.current.decrement() // 8 (limitado)
    })
    expect(result.current.counter).toBe(8)
  })
})
