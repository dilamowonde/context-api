import Page from "./components/page";
import LanguageProvider from "./contexts/languageContext";
import ThemeProvider from "./contexts/themeContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider>
          <Page />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
