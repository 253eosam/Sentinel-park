import { Box } from "@mui/material"

const TicketCountBox: React.FC<{ total: number, remain: number }> = ({ total, remain }) => {
  const useCnt = total - remain
  
  return (
    <Box>
      {
        Array(useCnt).fill('O').concat(
          Array(remain).fill('X')
        )
      }
      <span>({useCnt})</span>
    </Box>
  )
}

export default TicketCountBox
