import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./Theme.js";
import Header from "./component/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
