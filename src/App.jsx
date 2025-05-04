import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // Ensure this path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Correct component imports
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import Profile from "./pages/Profile";
import CertificateUploader from "./pages/Verification";
import CertificateVerification from "./pages/certificate";
import DegreeVerification from "./pages/degree";


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
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/verify" element={<CertificateUploader />} />
            <Route path="/certificate" element={<CertificateVerification />} />
            <Route path="/degree" element={<DegreeVerification />} />
            
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
