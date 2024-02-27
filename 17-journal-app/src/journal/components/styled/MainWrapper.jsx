import { styled } from '@mui/material/styles'
import { DRAWER_BP, DRAWER_WIDTH_PX } from '@Journal/constants'

const MainWrapper = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: '100vh',
  maxWidth: '100%',
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ml: 0,
  [theme.breakpoints.up(DRAWER_BP)]: {
    marginLeft: `-${DRAWER_WIDTH_PX}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      maxWidth: `calc(100% - ${DRAWER_WIDTH_PX}px)`,
    }),
  },
}))

export default MainWrapper
