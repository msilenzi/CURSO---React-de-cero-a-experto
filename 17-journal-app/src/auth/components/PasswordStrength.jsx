import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'

const PasswordStrength = React.memo(function PasswordStrength({
  id,
  password,
}) {
  return (
    <Box id={id} sx={{ pl: 2 }}>
      <Typography variant="body2">Password must contain:</Typography>
      <List dense>
        <PasswordItem
          primaryText={`At least 8 characters (${password.length}/8)`}
          isValid={password.length >= 8}
        />
        <PasswordItem
          primaryText="A lowercase letter"
          isValid={/[a-z]/.test(password)}
        />
        <PasswordItem
          primaryText="A capital letter"
          isValid={/[A-Z]/.test(password)}
        />
        <PasswordItem primaryText="A number" isValid={/\d/.test(password)} />
      </List>
    </Box>
  )
})

function PasswordItem({ primaryText, isValid }) {
  const color = isValid ? 'success' : 'error'

  return (
    <ListItem sx={{ py: 0 }}>
      <ListItemIcon sx={{ minWidth: '2em', color: `${color}.main` }}>
        {isValid ? <CheckIcon /> : <CloseIcon />}
      </ListItemIcon>
      <ListItemText primary={primaryText} sx={{ color: `${color}.main` }} />
    </ListItem>
  )
}

PasswordStrength.propTypes = {
  id: PropTypes.string,
  password: PropTypes.string.isRequired,
}

PasswordItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
}

export default PasswordStrength
