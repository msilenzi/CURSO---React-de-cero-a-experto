import { useCallback, useEffect, useState } from 'react'

function initFormErrors(formValidations) {
  if (!formValidations) return null

  return Object.keys(formValidations).reduce(
    (acc, key) => ({
      ...acc,
      [key]: null,
    }),
    {}
  )
}

function useForm(initialFormData, initialFormValidations) {
  const [formState, setFormState] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState(() =>
    initFormErrors(initialFormValidations)
  )
  const [formValidations, setFormValidations] = useState(initialFormValidations)

  useEffect(() => {
    setFormState(initialFormData)
  }, [initialFormData])

  function validate(field, value) {
    const { validator, message } = formValidations[field]
    const isValid = validator(value, formState)
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [field]: isValid ? null : message,
    }))
    return isValid
  }

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function handleInputValidation(e) {
    validate(e.target.name, e.target.value)
  }

  function handleReset() {
    setFormState(initialFormData)
  }

  const setFormValidation = useCallback(
    (field, validation) => {
      setFormValidations((prevFormValidations) => ({
        ...prevFormValidations,
        [field]: {
          ...prevFormValidations[field],
          ...validation,
        },
      }))
    },
    [setFormValidations]
  )

  function validateForm() {
    // Validate all inputs
    const arr = Object.keys(formValidations).map((field) =>
      validate(field, formState[field])
    )
    // Check if all were valid
    return arr.every((value) => value)
  }

  return {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    handleReset,
    validate,
    setFormValidation,
    validateForm,
  }
}

export default useForm
