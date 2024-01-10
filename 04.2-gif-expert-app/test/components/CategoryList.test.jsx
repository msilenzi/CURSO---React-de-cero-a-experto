import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { fetchGifsTrending } from '../../src/helpers/gifs'
import CategoryList from '../../src/components/CategoryList/CategoryList'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <CategoryList />', () => {
  test('debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<CategoryList category="Trending" fetcher={fetchGifsTrending} />)
    expect(screen.getByLabelText('loading')).toBeInTheDocument()
  })

  test('debe mostrar los items mediante useFetchGifs', () => {
    const gifs = [
      {
        id: 'fSvqyvXn1M3btN8sDh',
        title: 'Detective Pikachu Reaction',
        image: {
          url: 'https://media3.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=193d7d93qsc4g0b6crocv4a8wgyd05pnphfbdiyiwme4st26&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          height: 270,
          width: 480,
        },
        user: null,
      },
      {
        id: '7SF5scGB2AFrgsXP63',
        title: 'Sad Lonely',
        image: {
          url: 'https://media2.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=193d7d93qsc4g0b6crocv4a8wgyd05pnphfbdiyiwme4st26&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          height: 283,
          width: 500,
        },
        user: {
          username: 'pokemon',
          avatar_url:
            'https://media0.giphy.com/avatars/pokemon/9a7gX5hh1p67.jpg',
          profile_url: 'https://giphy.com/pokemon/',
        },
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })
    
    render(<CategoryList category="Pokemon" fetcher={fetchGifsTrending} />)
    expect(screen.getByAltText(gifs[0].title).src).toStrictEqual(gifs[0].image.url)
    expect(screen.getByAltText(gifs[1].title).src).toStrictEqual(gifs[1].image.url)
  })
})
