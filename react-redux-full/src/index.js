import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//  create Provider store
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
console.log(store)