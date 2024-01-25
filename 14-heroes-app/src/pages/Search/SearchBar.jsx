import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

import { useForm } from '@Hooks'

function SearchBar() {
  const navigate = useNavigate()

  const {
    formState: { search },
    handleInputChange,
    handleReset,
  } = useForm({ search: '' })

  function handleSubmit(e) {
    e.preventDefault()
    if (search.trim().length <= 1) return

    navigate(`?q=${search.trim().toLowerCase()}`)
    handleReset()
  }

  return (
    <Form
      className="mb-5 animate__animated animate__fadeIn"
      onSubmit={handleSubmit}
    >
      <InputGroup size="lg" className="mb-3 bg-white">
        <Form.Control
          type="text"
          placeholder="Search"
          name="search"
          autoComplete="off"
          value={search}
          onChange={handleInputChange}
        />
        <Button
          variant="outline-primary"
          className="d-flex align-items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>{' '}
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}

export { SearchBar }
