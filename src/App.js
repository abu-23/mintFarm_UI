import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Withdrawal from "./pages/withdrawal";
import Refer from "./pages/refer";
import { useTheme } from "./components/theme/useTheme";
import { useState, useEffect } from "react";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
            <Routes>
              <Route exact path="/" element={<Layout />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/withdrawal" element={<Withdrawal />} />
                <Route exact path="/refer" element={<Refer />} />
                <Route exact path="/team-farming" element={<Home />} />
                <Route exact path="/farm-now" element={<Home />} />;
              </Route>
            </Routes>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
