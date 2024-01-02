import React from "react";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/material";

interface ChangeThemeIconProperties {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ChangeThemeIcon: React.FC<ChangeThemeIconProperties> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <Box className={"theme-mode-icon"} onClick={toggleTheme}>
      {isDarkMode ? <Brightness5Icon /> : <DarkModeIcon />}
    </Box>
  );
};
