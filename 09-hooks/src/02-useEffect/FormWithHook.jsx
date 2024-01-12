import { useForm } from '@Hooks'

function FormWithHook() {
  const { formState, handleInputChange, handleReset } = useForm({
    username: '',
    email: '',
    password: '',
    select: '0',
  })

  return (
    <div style={{ width: '360px' }}>
      <h3 className="mb-4">Form with hook</h3>

      <form onReset={handleReset} >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor="select" className="form-label">
            Select a number
          </label>
          <select
            className="form-select"
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
        <button type="reset" className='btn btn-outline-danger'>Reset</button>
      </form>
    </div>
  )
}

export default FormWithHook
