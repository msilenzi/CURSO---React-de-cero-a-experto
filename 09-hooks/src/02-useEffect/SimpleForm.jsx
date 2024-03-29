import { useState } from 'react'
import Message from './Message'
import SectionTitle from '@UI/SectionTitle'

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
      <SectionTitle text="Simple Form" />

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control form-dark"
          placeholder="Username"
          value={formState.username}
          onChange={handleInputChange}
        />
        {formState.username === '' && <Message />}
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control form-dark"
          placeholder="Email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default SimpleForm
