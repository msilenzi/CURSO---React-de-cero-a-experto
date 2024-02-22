import { timestampToString } from '@Journal/utils'
import { setActiveNote } from '@Store/journal'
import { TurnedInNot } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

function SidebarItem({ note }) {
  const dispatch = useDispatch()
  
  function handleClick() {
    dispatch(setActiveNote(note))
  }

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <TurnedInNot />
      </ListItemIcon>
      <ListItemText
        primary={note.title}
        secondary={timestampToString(note.date, 'long')}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        title={note.title}
      />
    </ListItemButton>
  )
}

SidebarItem.propTypes = {
  note: PropTypes.exact({
    id: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

export default SidebarItem
