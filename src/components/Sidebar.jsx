import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import {
  Home,
  VerifiedUser,
  Login,
  AccountCircle,
  Menu
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(!isMobile);
  const location = useLocation();

  const handleHover = (open) => {
    if (!isMobile) {
      setIsOpen(open);
    }
  };

  useEffect(() => {
    setIsOpen(false); // Always start collapsed
  }, [isMobile]);

  const menuItems = [
    { icon: <Home />, text: "Home", path: "/" },
    { icon: <VerifiedUser />, text: "Verify", path: "/verify" },
    { icon: <Login />, text: "Login", path: "/login" },
    { icon: <AccountCircle />, text: "Profile", path: "/profile" }
  ];

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            position: "fixed",
            left: 16,
            top: 16,
            zIndex: 1201,
            color: "#FFFFFF",
            background: "linear-gradient(45deg, #6a1b9a, #9c27b0)",
            "&:hover": {
              background: "linear-gradient(45deg, #7b1fa2, #ba68c8)"
            }
          }}
        >
          <Menu />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        PaperProps={{
          sx: {
            width: isOpen ? 240 : 72,
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "linear-gradient(160deg, #6a1b9a, #8e24aa)",
            color: "#FFFFFF",
            overflowX: "hidden",
            borderRight: "none"
          }
        }}
      >
        <Box sx={{ p: 2, height: "100%" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  px: 2,
                  transition: "all 0.2s ease",
                  background:
                    location.pathname === item.path
                      ? "linear-gradient(45deg, #7b1fa2, #ba68c8)"
                      : "transparent",
                  "&:hover": {
                    background: "linear-gradient(90deg, #8e24aa, #ce93d8)",
                    transform: "translateX(5px)"
                  }
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                {isOpen && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        color: "white"
                      }
                    }}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
