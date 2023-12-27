import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Calculator from "./component/calculator";
import AppHeader from "./component/header";
import { useState } from "react";
import { defaultMode } from "./theme";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(defaultMode);
  document.body.style.backgroundColor = selectedTheme.color.mainBgColor;

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    document.body.style.backgroundColor = theme.color.mainBgColor;
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <MainContainer>
          <AppHeader HandleThemeChange={HandleThemeChange} />
          <Calculator />
        </MainContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
const MainContainer = styled.main`
  height: fit-content;

  flex-direction: column;
  @media screen and (min-width: 700px) {
    width: 30%;
  }
`;
