import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

const { palette } = createTheme()

const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          '&[disabled]': {
            color: palette.action.disabled,
            pointerEvents: 'none',
          },
        },
      },
    },
  },
})

export default purpleTheme
