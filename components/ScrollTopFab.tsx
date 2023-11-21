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
    <Box
      sx={{
        position: "fixed",
        bottom: 124,
        right: 16,
      }}
      display={{
        xs: "none",
        sm: "block",
      }}
    >
      <Fade in={trigger}>
        <Box role="presentation">
          <Fab
            size="medium"
            aria-label="botão voltar ao início"
            color="primary"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Fade>
    </Box>
  );
}
