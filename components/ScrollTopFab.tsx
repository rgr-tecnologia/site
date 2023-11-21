"use client";

import { Box, Fab, Fade } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export function ScrollTopFab() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Fade in={trigger}>
        <Box
          role="presentation"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
        >
          <Fab
            size="medium"
            aria-label="botão voltar ao início"
            color="primary"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Fade>
    </>
  );
}
