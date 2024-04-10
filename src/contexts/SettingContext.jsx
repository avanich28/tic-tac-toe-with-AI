import { createContext, useContext, useEffect, useState } from "react";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

const SettingContext = createContext();

function SettingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [AIMode, setAIMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useLocaleStorage(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleSetting() {
    setIsOpen((is) => !is);
  }

  function toggleAIMode() {
    setAIMode((isAI) => !isAI);
  }

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <SettingContext.Provider
      value={{
        isOpen,
        AIMode,
        isDarkMode,
        toggleSetting,
        toggleAIMode,
        toggleDarkMode,
        setIsOpen,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingContext);
  if (context === undefined)
    throw new Error("SettingContext was used outside of SettingProvider");

  return context;
}

export { SettingProvider, useSetting };
