import { createContext, useContext, useState } from "react";

const SettingContext = createContext();

function SettingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modeAI, setModeAI] = useState(true);

  return (
    <SettingContext.Provider value={{ isOpen, setIsOpen, modeAI, setModeAI }}>
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
