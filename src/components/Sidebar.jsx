import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, VerifiedUser, Login, Person } from "@mui/icons-material"; // Import Person icon for Profile

// Sidebar Item Component for better readability and reusability
const SidebarItem = React.memo(({ icon, text, isExpanded }) => (
  <ListItem button>
    <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
      {icon}
    </ListItemIcon>
    {isExpanded && <ListItemText primary={text} />}
  </ListItem>
));

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const drawerWidth = isExpanded ? 200 : 60;

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setIsExpanded(true)} // Expand on hover
      onMouseLeave={() => setIsExpanded(false)} // Collapse on mouse leave
      PaperProps={{
        sx: {
          width: drawerWidth,
          transition: "width 0.3s", // Smooth transition for resizing
          overflowX: "hidden",
          backgroundColor: "#4a148c",
          color: "#fff",
        },
      }}
    >
      <List>
        {/* Sidebar Items */}
        <SidebarItem icon={<Home />} text="Home" isExpanded={isExpanded} />
        <SidebarItem icon={<VerifiedUser />} text="Verify" isExpanded={isExpanded} />
        <SidebarItem icon={<Login />} text="Login" isExpanded={isExpanded} />
        
        {/* Adding Profile Sidebar Item */}
        <SidebarItem icon={<Person />} text="Profile" isExpanded={isExpanded} />
      </List>
    </Drawer>
  );
};

export default Sidebar;
