import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kv from "./pages/kv";
import Register from "./pages/register";
import Codes from "./pages/codes";
import GlobalLoading from "./components/globalLoading";

function App() {
  return (
    <div className="">
      <GlobalLoading>
        <Routes>
          <Route path="/" element={<Kv />} />
          <Route path="register" element={<Register />} />
          <Route path="codes" element={<Codes />} />
          <Route
            path="about"
            element={<p className="text-3xl text-center pt-12">Testing</p>}
          />
        </Routes>
      </GlobalLoading>
    </div>
  );
}

export default App;
