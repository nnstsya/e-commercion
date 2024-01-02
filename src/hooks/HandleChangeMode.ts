import { useEffect, useState } from "react";

export const HandleChangeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedMode === "true");
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const newMode = !current;
      localStorage.setItem("isDarkMode", String(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedMode = localStorage.getItem("isDarkMode");
      if (storedMode !== null) {
        setIsDarkMode(storedMode === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { isDarkMode, setIsDarkMode, toggleTheme };
};
