import { Box } from "@mui/material"

const AlarmDate: React.FC<{ stDate: string, endDate: string }> = ({ stDate, endDate }) => {

  return (
    <Box>
      Date : {stDate} ~ {endDate}
    </Box>
  )
}

export default AlarmDate
