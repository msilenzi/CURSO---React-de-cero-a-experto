import { useState } from 'react'
import Message from './Message'

function SimpleForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  })

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ width: '360px' }}>
      <h3 className="mb-4">Simple Form</h3>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
          value={formState.username}
          onChange={handleInputChange}
        />
        {(formState.username === '') && <Message />}
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default SimpleForm
