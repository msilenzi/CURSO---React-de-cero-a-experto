import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

jest.mock('../src/helpers/gifs', () => ({
  fetchGifsByCategory: jest.fn(() => Promise.resolve([])),
  fetchGifsTrending: jest.fn(() => Promise.resolve([])),
}));

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Pruebas en <GifExpertApp />', () => {
  test('debe mostrar Trendings al inicio', async () => {
    render(<GifExpertApp />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Trendings');
    });
  });
  
  test('debe agregar una categoría correctamente', async () => {
    render(<GifExpertApp />);

    const categorySearchInput = screen.getByRole('textbox');

    fireEvent.input(categorySearchInput, { target: { value: 'New Category' } });
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('New Category');
    });
  });

  test('debe agregar una categoria al principio de la página', async () => {
    render(<GifExpertApp />);

    const categorySearchInput = screen.getByRole('textbox');

    // Agregar la categoria 'Foo':
    
    fireEvent.input(categorySearchInput, { target: { value: 'Foo' } });
    fireEvent.submit(screen.getByRole('form'));
    
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Foo');
    });

    // Agregar la categoria 'Bar':

    fireEvent.input(categorySearchInput, { target: { value: 'Bar' } });
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const headers = screen.getAllByRole('heading', { level: 3 })
      expect(headers).toHaveLength(2)
      expect(headers[0]).toHaveTextContent('Bar')
      expect(headers[1]).toHaveTextContent('Foo')
    });

    // Agregar la categoria 'Foo' nuevamente:

    fireEvent.input(categorySearchInput, { target: { value: 'Foo' } });
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      const headers = screen.getAllByRole('heading', { level: 3 })
      expect(headers).toHaveLength(2)
      expect(headers[0]).toHaveTextContent('Foo')
      expect(headers[1]).toHaveTextContent('Bar')
    });
  })
});
