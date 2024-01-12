import { fetchGifsByCategory, fetchGifsTrending } from '../../src/helpers/gifs'

function assertFetchGifs(gifs) {
  expect(gifs).toBeArray()
  expect(gifs.length).toBeGreaterThan(0)
  expect(gifs[0]).toEqual({
    id: expect.any(String),
    title: expect.any(String),
    image: expect.objectContaining({
      url: expect.any(String),
      height: expect.any(Number),
      width: expect.any(Number),
    }),
    user: expect.toBeOneOf([
      expect.objectContaining({
        username: expect.any(String),
        avatar_url: expect.any(String),
        profile_url: expect.any(String),
      }),
      null,
    ]),
  })
}

describe('Pruebas en fetchGifsByCategory', () => {
  test('debe retornar un arreglo de gifs', async () => {
    expect.hasAssertions()
    const gifs = await fetchGifsByCategory('Pokemon')
    assertFetchGifs(gifs)
  })
})

describe('Pruebas en fetchGifsTrending', () => {
  test('debe retornar un arreglo de gifs', async () => {
    expect.hasAssertions()
    const gifs = await fetchGifsTrending()
    assertFetchGifs(gifs)
  })
})
