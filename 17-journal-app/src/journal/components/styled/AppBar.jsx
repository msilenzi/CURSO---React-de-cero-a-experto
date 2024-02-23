import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'

import { DRAWER_BP, DRAWER_WIDTH_PX } from '@Journal/constants'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up(DRAWER_BP)]: {
    ...(open && {
      width: `calc(100% - ${DRAWER_WIDTH_PX}px)`,
      marginLeft: `${DRAWER_WIDTH_PX}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },
}))

export default AppBar
