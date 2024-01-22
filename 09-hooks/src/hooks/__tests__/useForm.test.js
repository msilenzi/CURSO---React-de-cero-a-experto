import { act, renderHook } from '@testing-library/react'
import { useForm } from '@Hooks'

describe('Pruebas en useForm', () => {
  test('debe regresar los valroes por defecto', () => {
    const initialForm = { name: 'John', surname: 'Doe', age: 34 }
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toStrictEqual({
      formState: {
        name: initialForm.name,
        surname: initialForm.surname,
        age: initialForm.age,
      },
      handleInputChange: expect.any(Function),
      handleReset: expect.any(Function),
    })
  })

  test('debe cambiar el campo del formulario', () => {
    const initialForm = { name: 'John', surname: 'Doe', age: 34 }
    const { result } = renderHook(() => useForm(initialForm))

    act(() =>
      result.current.handleInputChange({
        target: { name: 'surname', value: 'Does' },
      })
    )
    expect(result.current.formState.surname).toBe('Does')
  })

  test('debe reiniciar el formulario', () => {
    const initialForm = { name: 'John', surname: 'Doe', age: 34 }
    const { result } = renderHook(() => useForm(initialForm))

    act(() => {
      result.current.handleInputChange({
        target: { name: 'surname', value: 'Does' },
      })
    })
    expect(result.current.formState.surname).toBe('Does')

    act(() => result.current.handleReset())
    expect(result.current.formState).toStrictEqual(initialForm)
  })
})
