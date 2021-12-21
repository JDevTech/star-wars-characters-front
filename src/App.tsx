import React, { FC } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import store from "./store";
import { defaultTheme } from "./themes";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";

const GlobalStyle = createGlobalStyle`
  *{        
    margin: 0;
    padding: 0;    
    box-sizing: border-box;
    font-family: 'Raleway', Sans-serif;  
  }

  body{    
    min-height: 100vh;
  }
`;

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="character/:id" element={<CharacterPage />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
