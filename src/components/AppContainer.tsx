import { Box } from "@mui/system";

const AppContainer: React.FC<any> = (props) => {
  return (
    <Box
      sx={{
        margin: 5,
      }}
    >
      {props.children}
    </Box>
  )
}

export default AppContainer
