import { renderHook, waitFor } from '@testing-library/react'
import { fetchGifsTrending } from '../../src/helpers/gifs'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en useFetchGifs hook', () => {
  test('debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(fetchGifsTrending))
    const { images, isLoading } = result.current
    expect(images).toHaveLength(0)
    expect(isLoading).toBeTrue()
  })

  test('debe retornar un arreglo de imágenes e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs(fetchGifsTrending))
    await waitFor(() => expect(result.current.images).not.toBeEmpty())
    const { images, isLoading } = result.current
    expect(images).not.toBeEmpty()
    expect(isLoading).toBeFalse()
  })
})
