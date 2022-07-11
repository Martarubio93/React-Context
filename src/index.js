import React from "react";
import ReactDOM from 'react-dom';
import App from "./Components/App";
import ThemeContext from "./Components/ThemeContext";

ReactDOM.render(
  <ThemeContext.Provider value="green">
  <App/>
  </ThemeContext.Provider>,
  document.getElementById('root')
)