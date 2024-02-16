import { useState } from 'react'

function useForm(initialForm) {
  const [formState, setFormState] = useState(initialForm)

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function handleReset() {
    setFormState(initialForm)
  }

  return { formState, handleInputChange, handleReset }
}

export default useForm
