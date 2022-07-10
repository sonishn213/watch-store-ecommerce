import Navbar from "./component/navigation/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./component/navigation/Footer";

import { Provider } from "react-redux";
import { store } from "./app/store";
// import { createMuiTheme,  } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D87C49",
      },
    },
  });
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <main>
            <Navbar />
            <Outlet />
            <Footer />
          </main>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
