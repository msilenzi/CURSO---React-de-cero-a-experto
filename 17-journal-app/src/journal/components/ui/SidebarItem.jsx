import { timestampToString } from '@Journal/utils'
import { TurnedInNot } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'

function SidebarItem({ title, date }) {
  return (
    <ListItemButton>
      <ListItemIcon>
        <TurnedInNot />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={timestampToString(date, 'long')}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        title={title}
      />
    </ListItemButton>
  )
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
}

export default SidebarItem
