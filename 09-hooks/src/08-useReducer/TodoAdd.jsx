import PropTypes from 'prop-types'
import { useForm } from '@Hooks'

function TodoAdd({ handleAdd }) {
  const {
    formState: { description },
    handleInputChange,
    handleReset,
  } = useForm({ description: '' })

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedDescription = description.trim()
    if (trimmedDescription.length === 0) return

    handleAdd({ id: Date.now(), description: trimmedDescription, done: false })
    handleReset()
  }

  return (
    <form className="input-group mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control form-control-lg form-dark"
        placeholder="New todo"
        aria-label="New todo"
        aria-describedby="btn-add"
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <button className="btn btn-dark" type="submit" id="btn-add">
        Add
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}

export default TodoAdd
