import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#949494',
      main: '#212121',
      dark: '#7b3434'
    },
    secondary: {
      light: '#ffee92',
      main: '#FFD600',
      dark: '#ff6a6a'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/search' component={SearchPage}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
