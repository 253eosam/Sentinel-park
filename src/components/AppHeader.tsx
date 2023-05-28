import {
  Avatar,
  Icon,
  Box,
  Button,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
} from "@mui/material"
import React from "react"
import { usePopover } from "../hooks/usePopover"
import "@fontsource/roboto/700.css"
import AddIcon from "@mui/icons-material/Add"
import MoreVertIcon from "@mui/icons-material/MoreVert"

const TOP_NAV_HEIGHT = 64
const APP_TITLE = process.env.NEXT_PUBLIC_TITLE

const AppHeader: React.FC<any> = (props) => {
  const accountPopover = usePopover()

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          position: "sticky",
          left: 0,
          right: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          boxShadow: "0 4px 6px -6px #222",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <h1>
            <a
              href="#"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {APP_TITLE}
            </a>{" "}
          </h1>
          <Stack direction={"row"} spacing={2} paddingX={2}>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default AppHeader
