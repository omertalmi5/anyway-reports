import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

function AnywayApp() {
  const muiTheme = createMuiTheme({
    direction: "rtl",
    palette: {
      primary: blue,
    },
  });

  return (
    <RTL>
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </RTL>
  );
}

ReactDOM.render(<AnywayApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
