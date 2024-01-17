import { useForm } from '@Hooks'
import SectionTitle from '@UI/SectionTitle'

function FormWithHook() {
  const { formState, handleInputChange, handleReset } = useForm({
    username: '',
    email: '',
    password: '',
    select: '0',
  })

  return (
    <div style={{ width: '360px' }}>
      <SectionTitle text="Form with hook" />

      <form onReset={handleReset}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control form-dark"
            placeholder="Username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control form-dark"
            placeholder="Email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control form-dark"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="select" className="form-label">
            Select a number
          </label>
          <select
            className="form-select form-dark"
            id="select"
            name="select"
            onChange={handleInputChange}
          >
            <option value="0">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="reset" className="btn btn-outline-danger">
          Reset
        </button>
      </form>
    </div>
  )
}

export default FormWithHook
