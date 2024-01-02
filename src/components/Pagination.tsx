import React from "react";
import { Box } from "@mui/system";
import { DarkTheme } from "@/themes/DarkTheme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LightTheme } from "@/themes/LightTheme";
import { ThemeProvider } from "@mui/material/styles";

interface PaginationProps {
  isDarkMode: boolean;
  nextPage: () => void;
  previousPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  isDarkMode,
  nextPage,
  previousPage,
}) => {
  return (
    <div>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <Box
          className={"pagination"}
          color={"text.primary"}
          bgcolor={"primary.main"}
        >
          <ArrowBackIosIcon onClick={previousPage} />
          <ArrowForwardIosIcon onClick={nextPage} />
        </Box>
      </ThemeProvider>
    </div>
  );
};
