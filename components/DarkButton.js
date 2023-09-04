import { useTheme } from "next-themes";
import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

function DarkButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <BsMoonStarsFill
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    />
  );
}

export default DarkButton;
