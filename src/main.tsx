import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@gravity-ui/uikit/styles/styles.css";
import { ThemeProvider } from "@gravity-ui/uikit";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme="light">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
