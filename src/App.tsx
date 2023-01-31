import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { IconContext } from "phosphor-react";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IconContext.Provider
        value={{
          size: 20,
          weight: "fill",
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </IconContext.Provider>
    </ThemeProvider>
  );
};
