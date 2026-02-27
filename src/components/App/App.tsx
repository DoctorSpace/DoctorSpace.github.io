import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ContactPage from "../ContactPage/ContactPage";
import Yandex from "../Yandex/Yandex";

function App() {
  return (
    <div className="App">
      <Analytics />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/yandex_2e9e41e634307037.html" element={<Yandex />} />
      </Routes>
    </div>
  );
}

export default App;
