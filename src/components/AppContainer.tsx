import { Box } from "@mui/system"

const AppContainer: React.FC<any> = (props) => {

  return (
    <Box
      sx={{
        borderRadius: '10px',
        background: '#E7EBF0',
        padding: 5,
        margin: 5,
        marginBottom: 0,
      }}  
    >
      {props.children}
    </Box>
  )
}

export default AppContainer
