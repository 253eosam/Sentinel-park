import { Button, Skeleton, SwipeableDrawer, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { grey } from "@mui/material/colors"
import { Global } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { atom, selector, useRecoilState, useRecoilValue } from "recoil"
import useBottomSwiperDrawer from "@src/hooks/useBottomSwiperDrawer"

export const drawerAtom = atom({
  key: "drawer.drawerAtom",
  default: false,
})
export const drawerComponentAtom = atom({
  key: "drawer.drawerComponentAtom",
  default: null,
})

const drawerBleeding = 56

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}))

const TemporarySwipeableDrawer: React.FC<any> = () => {
  const { isOpenDrawer, offDrawer, drawerComponent, openDrawer } =
    useBottomSwiperDrawer()

  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={isOpenDrawer}
        onClose={() => offDrawer()}
        onOpen={() => openDrawer()}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            borderRadius: "10px",
            height: "100%",
            overflow: "auto",
            padding: 3,
          }}
        >
          {!!drawerComponent ? (
            drawerComponent
          ) : (
            <Skeleton variant="rectangular" height="100%" />
          )}
        </StyledBox>
      </SwipeableDrawer>
    </>
  )
}

export default TemporarySwipeableDrawer
