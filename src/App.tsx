import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kv from "./pages/kv";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Kv />} />
        <Route path="about" element={<p>about</p>} />
      </Routes>
    </div>
  );
}

export default App;
