import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CapturePage from "./pages/capture";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter basename="/capture-test">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capture" element={<CapturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
