import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Link, 
  Divider, 
  IconButton,
  InputAdornment
} from '@mui/material';
import { 
  Email, 
  Lock, 
  Visibility, 
  VisibilityOff,
  Google,
  GitHub
} from '@mui/icons-material';
import { styled } from '@mui/system';
import pic2 from '../assets/pic2.jpg'; // Background image placeholder - replace with your actual image path

// Background image placeholder - replace with your actual image path
const backgroundImage = "../assets/pic2.jpg";

const LoginContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(rgba(74, 20, 140, 0.8), rgba(106, 27, 154, 0.8)), url(${pic2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  zIndex: 0,
}));

const LoginCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '450px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(8px)',
  zIndex: 2,
  position: 'relative',
}));

const MouseCircle = styled(Box)(({ theme, mouseX, mouseY }) => ({
  position: 'absolute',
  left: `${mouseX}px`,
  top: `${mouseY}px`,
  width: '1000px',
  height: '1000px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(226, 151, 222, 0.3) 0%, transparent 50%)',
  transform: 'translate(-40%, -40%)',
  pointerEvents: 'none',
  zIndex: 1,
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <LoginContainer>
        <MouseCircle 
          mouseX={mousePosition.x} 
          mouseY={mousePosition.y} 
        />
        
        <LoginCard>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: 'primary.main',
              textAlign: 'center',
              mb: 4
            }}
          >
            Welcome Back
          </Typography>

          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                }
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                }
              }}
            />

            <Box sx={{ mt: 2, mb: 3 }}>
              <Link href="#" variant="body2" color="primary">
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #6a1b9a, #9c27b0)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(106, 27, 154, 0.4)'
                }
              }}
            >
              Sign In
            </Button>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Or continue with
              </Typography>
            </Divider>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Google />}
                  sx={{
                    py: 1,
                    borderRadius: '12px',
                    borderColor: 'text.secondary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main'
                    }
                  }}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHub />}
                  sx={{
                    py: 1,
                    borderRadius: '12px',
                    borderColor: 'text.secondary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main'
                    }
                  }}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>

            <Typography sx={{ mt: 3, textAlign: 'center' }}>
              Don't have an account?{' '}
              <Link href="#" color="primary">
                Sign Up
              </Link>
            </Typography>
          </form>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default LoginPage;