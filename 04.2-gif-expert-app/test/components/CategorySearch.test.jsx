import { fireEvent, render, screen } from '@testing-library/react'
import CategorySearch from '../../src/components/CategorySearch/CategorySearch'

describe('Pruebas en <CategorySearch />', () => {
  test('debe actualizar el valor de búsqueda', () => {
    const inputValue = 'Pokemon'
    render(<CategorySearch addCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: inputValue } })
    expect(input.value).toStrictEqual(inputValue)
  })

  test('debe enviar el formulario', () => {
    const inputValue = '  Pokemon  '
    const addCategory = jest.fn()

    render(<CategorySearch addCategory={addCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toStrictEqual('')
    expect(addCategory).toHaveBeenCalledExactlyOnceWith(inputValue.trim())
  })

  test('no debe enviar el formulario cuando solo hay espacios', () => {
    const inputValue = '   '
    const addCategory = jest.fn()

    render(<CategorySearch addCategory={addCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toStrictEqual(inputValue)
    expect(addCategory).not.toHaveBeenCalled()
  })
})
