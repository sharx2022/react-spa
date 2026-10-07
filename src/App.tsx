import "./App.css";
import { Routes, Route } from "react-router-dom";
import Farewell from "./pages/Farewell";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('el') ? 'el' : 'en';
  }, [i18n.language]);

  // Sharx is closing: every URL on the domain shows the farewell page.
  return (
    <Routes>
      <Route path="*" element={<Farewell />} />
    </Routes>
  );
}

export default App;
