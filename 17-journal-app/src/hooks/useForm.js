import { useState } from 'react'

function initFormErrors(formValidations) {
  return Object.keys(formValidations).reduce(
    (acc, key) => ({
      ...acc,
      [key]: null,
    }),
    {}
  )
}

function useForm(initialForm, formValidations) {
  const [formState, setFormState] = useState(initialForm)
  const [formErrors, setFormErrors] = useState(() =>
    initFormErrors(formValidations)
  )

  function validate(field, value, customValidator) {
    const { validator, message } = formValidations[field]
    const currentValidator = customValidator ?? validator
    const isValid = currentValidator(value)
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [field]: isValid ? null : message,
    }))
    return isValid
  }

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function handleInputValidation(e, customValidator) {
    validate(e.target.name, e.target.value, customValidator)
  }

  function handleReset() {
    setFormState(initialForm)
  }

  return {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    handleReset,
    validate,
  }
}

export default useForm
