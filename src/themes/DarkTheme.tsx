import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 600,
      lg: 900,
      xl: 1024,
    },
  },
  palette: {
    text: {
      primary: "#ffffff",
    },
    warning: {
      main: "#ff0000",
    },
    secondary: {
      main: "#8c8c8c",
      contrastText: "#4c4c4c",
    },
    background: {
      default: "#141414",
      paper: "#212121",
    },
    primary: {
      main: "rgba(255,255,255,0.2)",
    },
  },
  shadows: [
    "none",
    "rgba(104, 98, 98, 32%) 0 3px 5px",
    "rgb(231, 231, 231, 18%) 0 1px 3px, rgb(91, 86, 86, 60%) 0 1px 2px",
    "rgb(85, 85, 85, 25%) 0px 0px 24px 3px, rgb(255, 255, 255, 8%) 0 0 0 1px",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
});

export type DarkTheme = typeof DarkTheme;
