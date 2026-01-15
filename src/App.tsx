import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import CapturePage from "./pages/capture";
import HomePage from "./pages/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capture" element={<CapturePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
