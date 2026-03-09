import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Settings from "./Components/Settings";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
