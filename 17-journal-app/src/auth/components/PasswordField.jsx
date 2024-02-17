import { VisibilityOff, VisibilityOutlined } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      sx={{
        '&:focus-within svg': {
          color: 'primary.main',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <VisibilityOutlined />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
export default PasswordField
