import PropTypes from 'prop-types'
import { Alert, Snackbar } from '@mui/material'

function SnackbarAlert({
  severity,
  message,
  autoHideDurationMs,
  open,
  handleClose,
  ...props
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDurationMs}
      onClose={handleClose}
      {...props}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

SnackbarAlert.propTypes = {
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
  autoHideDurationMs: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SnackbarAlert
