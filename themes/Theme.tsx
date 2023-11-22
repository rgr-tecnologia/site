"use client";

import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";
import { Saira } from "next/font/google";

const saira = Saira({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: saira.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#EA1F29",
      light: "#EA1F29",
      dark: "#EA1F29",
      contrastText: "#fff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
  },
});

export const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
