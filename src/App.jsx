import { BoardGameProvider } from "./contexts/BoardGameContext";
import { SettingProvider } from "./contexts/SettingContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <SettingProvider>
        <BoardGameProvider>
          <AppLayout />
        </BoardGameProvider>
      </SettingProvider>
    </>
  );
}

export default App;
