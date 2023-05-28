import { Box } from "@mui/material"
import AlarmTitle from "./AlarmTitle"
import AlarmToggle from "./AlarmToggle"
import AlarmType from "./AlarmType"
import AlarmDate from "./AlarmDate"
import TicketCountBox from "./TicketCountBox"
import AlarmDayOfWeek from "./AlarmDayOfWeek"

const AlarmBox: React.FC<any> = ({ item }) => {
  return (
    <Box
      className="bg-secondary text-white"
      sx={{
        position: "relative",
        borderRadius: "10px",
        padding: 5,
        marginY: 5,
      }}
    >
      <AlarmTitle></AlarmTitle>
      <AlarmToggle flag={item % 2 === 0}></AlarmToggle>
      <AlarmType val={"U"}></AlarmType>
      <AlarmDate stDate="2023.05.18" endDate="2023.06.17"></AlarmDate>
      <TicketCountBox total={10} remain={3}></TicketCountBox>
      <AlarmDayOfWeek val={["mon", "sat"]}></AlarmDayOfWeek>
      <span>{item}</span>
    </Box>
  )
}

export default AlarmBox
