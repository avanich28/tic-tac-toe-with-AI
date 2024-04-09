import { SettingProvider } from "./contexts/SettingContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <SettingProvider>
        <AppLayout />
      </SettingProvider>
    </>
  );
}

export default App;
