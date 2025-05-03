import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />

      <div
        style={{
          flexGrow: 1,
          transition: "margin-left 0.3s",
          marginLeft: isSidebarExpanded ? 200 : 60,
          padding: 20,
          backgroundColor: "aa00ff",
        }}
      >
        <h1>Welcome to the App!</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default App;
