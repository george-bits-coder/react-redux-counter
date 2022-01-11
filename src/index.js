import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
// we have to import Store on index.js and pass it using ReduxProvider
import { Store } from "./Redux/store";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={Store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
  rootElement
);
