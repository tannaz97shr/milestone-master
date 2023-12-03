"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");
  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <div className="flex items-center mt-auto justify-center">
      <MdLightMode />
      <label className="relative inline-flex items-center cursor-pointer mx-2">
        <input
          onChange={handleSwitchChange}
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </label>
      <MdDarkMode />
    </div>
  );
}

export default ThemeSwitch;
