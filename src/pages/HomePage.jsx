import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Typography, Container, Box, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import pic1 from "../assets/pic1.jpg";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const HeroBox = styled(Box)(({ theme, mouseX, mouseY }) => ({
  height: '100vh', // Changed from minHeight to fixed height
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `
    radial-gradient(circle at ${mouseX}px ${mouseY}px, 
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 70%),
    url(${pic1})
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  color: 'white',
  position: 'fixed', // Changed to fixed position
  top: 0,
  left: 0,
  overflow: 'hidden',
  transition: 'background 0.3s ease-out',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(
      45deg,
      rgba(25, 118, 210, 0.3) 0%,
      rgba(156, 39, 176, 0.3) 100%
    )`,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const AnimatedTitle = styled(Typography)({
  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) both`,
  transition: 'transform 0.3s ease, opacity 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    opacity: 0.9
  },
});

const AnimatedSubtitle = styled(Typography)({
  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both`,
  transition: 'all 0.3s ease',
  '&:hover': {
    letterSpacing: '2px',
    textShadow: '0 0 15px rgba(255,255,255,0.5)'
  },
});

const AnimatedButton = styled(Button)({
  animation: `${fadeInUp} 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05) rotate(2deg)',
    boxShadow: '0 0 25px rgba(255,255,255,0.3)'
  },
});

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePosition({ x, y });
  };

  return (
    <Box sx={{ display: "flex", height: '100vh' }}>
      <Sidebar />
      <Box component="main" sx={{ 
        flexGrow: 1,
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <HeroBox 
          onMouseMove={handleMouseMove}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        >
          <ContentWrapper>
            <Container maxWidth="md">
              <AnimatedTitle 
                variant="h2" 
                sx={{ 
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  textShadow: '3px 3px 12px rgba(0,0,0,0.4)'
                }}
              >
                Secure Certificate Verification
              </AnimatedTitle>
              
              <AnimatedSubtitle 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                }}
              >
                Instant validation powered by blockchain technology
              </AnimatedSubtitle>
              
              <AnimatedButton
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '25px',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  color: 'black',
                  '&:hover': {
                    bgcolor: 'rgb(73, 0, 141)',
                    color: 'white',
                  }
                }}
              >
                Verify Now
              </AnimatedButton>
            </Container>
          </ContentWrapper>
        </HeroBox>
      </Box>
    </Box>
  );
};

export default HomePage;