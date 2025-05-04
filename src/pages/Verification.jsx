// src/pages/VerificationPage.jsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import pic3 from '../assets/pic3.jpg';

const VerificationPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(74, 20, 140, 0.8), rgba(106, 27, 154, 0.8)), url(${pic3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        flexWrap: 'wrap'
      }}>
        {/* Certificate Verification Card */}
        <Card sx={{
          width: 450,
          background: 'linear-gradient(145deg, #7b1fa2, #6a1b9a)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: 2,
          cursor: 'pointer',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.03)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <CloudUpload sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h5" sx={{ mb: 3 }}>
              Certificate Verification
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: '#7b1fa2',
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
              onClick={() => navigate('/certificate')}
            >
              Verify Certificate
            </Button>
          </CardContent>
        </Card>

        {/* Degree Verification Card */}
        <Card sx={{
          width: 450,
          background: 'linear-gradient(145deg, #9c27b0, #7b1fa2)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: 2,
          cursor: 'pointer',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.03)'
          }
        }}>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <CloudUpload sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h5" sx={{ mb: 3 }}>
              Degree Verification
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: '#7b1fa2',
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
              onClick={() => navigate('/degree')}
            >
              Verify Degree
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default VerificationPage;
