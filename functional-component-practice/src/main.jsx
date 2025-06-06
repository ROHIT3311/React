import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/CounterContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  // <ContextProvider value="20">
  //   <App />
  // </ContextProvider>

  <Provider store={store}>
    <App />
  </Provider>
);
