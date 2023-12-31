import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunriseFill } from "react-icons/bs";

// const buttonIcon = {
//   dark: <BsMoonStarsFill color="#FFF" size={30} />,
//   light: <BsMoonStarsFill color="#000" size={30} />,
// };

function DarkButton() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  return (
    <button
      onClick={() => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {theme === "dark" ? (
        <BsSunriseFill style={{ color: "#ecfccb" }} size={35} />
      ) : (
        <BsMoonStarsFill
          size={35}
          style={{ color: "#1b2335" }}
          // style={theme === "dark" ? { color: "white" } : { color: "black" }}
        />
      )}
    </button>
  );
}

export default DarkButton;
