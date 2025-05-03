import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // Ensure this path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import img2 from "./assets/img2.jpg"; // Ensure the path is correct
// Correct component imports
import HomePage from "./pages/HomePage";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar
          isExpanded={isSidebarExpanded}
          setIsExpanded={setIsSidebarExpanded}
        />
        <div
          style={{
            flexGrow: 1,
            transition: "margin-left 0.3s",
            marginLeft: isSidebarExpanded ? 250 : 60,
            padding: 20,
            backgroundColor: "#f1f1f1",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
