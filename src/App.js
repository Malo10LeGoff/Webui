import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import GCPResources from "./GCPResources";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/gcp_resources" element={<GCPResources />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
