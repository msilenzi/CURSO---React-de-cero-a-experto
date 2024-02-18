import { useCallback, useState } from 'react'

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

  function validate(field, value) {
    const { validator, message } = formValidations[field]
    const isValid = validator(value)
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

  return {
    formState,
    formErrors,
    handleInputChange,
    handleInputValidation,
    handleReset,
    validate,
    setFormValidation,
  }
}

export default useForm
