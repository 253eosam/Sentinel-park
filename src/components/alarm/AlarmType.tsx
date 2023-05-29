import { Box } from "@mui/material"

const ALARM_TYPES = {
  S: "S",
  N: "N",
  U: "U",
} as const

const BOX_WIDTH = 90
const BOX_HEIGHT = 60

const AlarmType: React.FC<{ val?: keyof typeof ALARM_TYPES }> = ({ val }) => {
  return (
    <Box
      className={`inline-block bg-white text-center font-mono text-8xl font-bold text-secondary shadow-2xl leading-[${BOX_HEIGHT}px]`}
      sx={{
        minWidth: BOX_WIDTH,
        minHeight: 60,
        borderRadius: 2,
      }}
    >
      {val && ALARM_TYPES[val] ? ALARM_TYPES[val] : "X"}
    </Box>
  )
}

export default AlarmType
