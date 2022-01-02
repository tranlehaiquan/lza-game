import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kv from "./pages/kv";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Kv />} />
        <Route path="about" element={<p className="text-3xl text-center pt-12">Testing</p>} />
      </Routes>
    </div>
  );
}

export default App;
