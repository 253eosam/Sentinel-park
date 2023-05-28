import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { Box, IconButton } from '@mui/material'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'

const AlarmToggle: React.FC<any> = ({ flag = false, flagHandle = () => {} }) => {
  const AlarmOnIcon = () => (<IconButton className='text-white' onClick={() => handle(true)} ><NotificationsActiveIcon/></IconButton>)
  const AlarmOffIcon = () => (<IconButton className='text-white' onClick={() => handle(false)}><NotificationsOffOutlinedIcon/></IconButton>)

  const handle = (value: boolean) => {
      flagHandle(value)
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 37,
        right: 35,
        color: 'white',
      }}
    >
      {
        flag ? <AlarmOnIcon /> : <AlarmOffIcon />
      }
    </Box>
  )
}

export default AlarmToggle
