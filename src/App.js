import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SidePanel from "./components/sidebar";
import Table from "./components/agenttable"
import CreateAgent from "./components/createagent"

function App() {
  return (
    <Router>
      <div className="w-full flex bg-gray-50">
        <div className="w-[20%] h-screen ">
          <SidePanel />
        </div>

        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<Table />} />
            <Route path="/create-agent" element={<CreateAgent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
