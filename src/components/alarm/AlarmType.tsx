import { Box } from "@mui/material"

const ALARM_TYPES = {
  S: "S",
  N: "N",
  U: "U",
} as const

const BOX_WIDTH = 90
const BOX_HEIGHT = 60

const AlarmType: React.FC<{ val?: keyof typeof ALARM_TYPES}> = ({ val }) => {
  return (
    <Box
      className={`bg-white text-secondary inline-block text-center shadow-2xl font-mono font-bold text-8xl leading-[${BOX_HEIGHT}px]`}
      sx={{
        minWidth: BOX_WIDTH,
        minHeight: BOX_HEIGHT,
        borderRadius: 2,
      }}
    >
      {(val && ALARM_TYPES[val]) ? ALARM_TYPES[val] : 'X'}
    </Box>
  )
}

export default AlarmType
