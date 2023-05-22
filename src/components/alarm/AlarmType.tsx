import { Box } from "@mui/material"

const ALARM_TYPES = {
  S: "S",
  N: "N",
  U: "U",
} as const

const AlarmType: React.FC<{ val?: keyof typeof ALARM_TYPES}> = ({ val }) => {
  return (
    <Box>
      {(val && ALARM_TYPES[val]) ? ALARM_TYPES[val] : 'X'}
    </Box>
  )
}

export default AlarmType
