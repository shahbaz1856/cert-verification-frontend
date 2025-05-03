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
  Box,
  Divider
} from "@mui/material";
import {
  Home,
  VerifiedUser,
  Login,
  AccountCircle,
  Menu,
  Close
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { styled, keyframes } from "@mui/system";

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const glassEffect = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)"
};

// Styled Components
const FloatingSidebar = styled(Drawer)(({ theme, ismobile, isopen }) => ({
  "& .MuiDrawer-paper": {
    width: ismobile ? (isopen ? "280px" : "0") : isopen ? "280px" : "90px",
    height: "100vh",
    ...glassEffect,
    borderRadius: ismobile ? "0" : isopen ? "0 24px 24px 0" : "0 16px 16px 0",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    overflowX: "hidden",
    borderRight: "none",
    padding: theme.spacing(2),
    position: ismobile ? "fixed" : "relative",
    zIndex: theme.zIndex.drawer + 1
  }
}));

const MenuItem = styled(ListItem)(({ theme, isactive }) => ({
  borderRadius: "12px",
  margin: theme.spacing(1, 0),
  padding: theme.spacing(1.5, 2),
  transition: "all 0.3s ease",
  background: isactive === "true" ? "rgba(255, 255, 255, 0.2)" : "transparent",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.15)",
    transform: "translateX(5px)"
  },
  animation: `${floatAnimation} 4s ease-in-out infinite`,
  animationDelay: ({ index }) => `${index * 0.1}s`
}));

const MenuIcon = styled(ListItemIcon)({
  minWidth: "36px",
  color: "white",
  transition: "transform 0.3s ease",
  "& svg": {
    fontSize: "1.6rem"
  }
});

const MenuText = styled(ListItemText)(({ theme }) => ({
  "& span": {
    fontWeight: 500,
    fontSize: "1rem",
    letterSpacing: "0.5px"
  }
}));

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  left: "16px",
  top: "16px",
  zIndex: theme.zIndex.drawer + 2,
  ...glassEffect,
  color: "white",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)"
  }
}));

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(!isMobile);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Auto-close on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location, isMobile]);

  const menuItems = [
    { icon: <Home />, text: "Home", path: "/" },
    { icon: <VerifiedUser />, text: "Verify", path: "/verify" },
    { icon: <Login />, text: "Login", path: "/login" },
    { icon: <AccountCircle />, text: "Profile", path: "/profile" }
  ];

  return (
    <>
      {isMobile && (
        <HamburgerButton onClick={toggleSidebar} size="large">
          {isOpen ? <Close /> : <Menu />}
        </HamburgerButton>
      )}

      <FloatingSidebar
        variant={isMobile ? "temporary" : "permanent"}
        open={isOpen}
        onClose={toggleSidebar}
        ismobile={isMobile}
        isopen={isOpen}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
          }}
        >
          {/* Logo/Header would go here */}
          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />

          <List sx={{ flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.text}
                button
                component={Link}
                to={item.path}
                isactive={(location.pathname === item.path).toString()}
                index={index}
              >
                <MenuIcon>{item.icon}</MenuIcon>
                {isOpen && (
                  <MenuText primary={item.text} />
                )}
              </MenuItem>
            ))}
          </List>

          {/* Optional footer would go here */}
        </Box>
      </FloatingSidebar>
    </>
  );
};

export default Sidebar;