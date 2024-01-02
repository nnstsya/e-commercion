import { createTheme } from "@mui/material/styles";

interface CustomPalette {
  secondary: {
    main: string;
    dark: string;
  };
}
export const LightTheme = createTheme({
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
      primary: "#000000",
    },
    warning: {
      main: "#ff0000",
    },
    secondary: {
      main: "#4c4c4c",
      contrastText: "#8c8c8c",
    },
    background: {
      default: "#ededed",
      paper: "#ffffff",
    },
    primary: {
      main: "rgba(0,0,0,0.2)",
    },
  },
  shadows: [
    "none",
    "rgba(0, 0, 0, 0.04) 0 3px 5px",
    "rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px",
    "rgb(210, 205, 205, 25%) 0px 0px 24px 3px, rgb(0, 0, 0, 8%) 0 0 0 1px",
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

export type LightTheme = typeof LightTheme;
