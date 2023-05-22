import { Box, Typography } from "@mui/material"

const DAY_OF_WEEK = {
  sun: "일",
  mon: "월",
  tue: "화",
  wen: "수",
  thu: "목",
  fri: "금",
  sat: "토",
} as const

type TDayOfWeekEn = (keyof typeof DAY_OF_WEEK)

const AlarmDayOfWeek: React.FC<{ val : TDayOfWeekEn[] }> = ({ val = [] }) => {

  return (
    <Box>
      {
        Object.entries(DAY_OF_WEEK)
          .map(([enDay, koDay]) => {
            return (<Typography key={enDay}>
              { val.includes(enDay as TDayOfWeekEn) ? enDay : koDay }
            </Typography>)
          })
      }
    </Box>
  )
}

export default AlarmDayOfWeek
