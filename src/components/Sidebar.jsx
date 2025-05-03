import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, VerifiedUser, Login } from "@mui/icons-material";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const drawerWidth = isExpanded ? 200 : 60;

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      PaperProps={{
        sx: {
          width: drawerWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "#2c3e50",
          color: "#fff",
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
            <Home />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Home" />}
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
            <VerifiedUser />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Verify" />}
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
            <Login />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Login" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
