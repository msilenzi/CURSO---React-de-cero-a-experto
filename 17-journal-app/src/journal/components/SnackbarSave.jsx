import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { SnackbarAlert } from './ui'

const savingSnackbar = {
  open: true,
  message: 'Saving changes...',
  severity: 'info',
}

const savedSnackbar = {
  open: true,
  message: 'Changes saved',
  severity: 'success',
}

function SnackbarSave() {
  const { isSaving } = useSelector((state) => state.journal)

  const didMount = useRef(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  })

  function closeSnackbar(e, reason) {
    if (reason === 'clickaway') return
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    setSnackbar(isSaving ? savingSnackbar : savedSnackbar)
  }, [isSaving])

  return (
    <SnackbarAlert
      message={snackbar.message}
      severity={snackbar.severity}
      open={snackbar.open}
      autoHideDurationMs={3000}
      handleClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  )
}

export default SnackbarSave
