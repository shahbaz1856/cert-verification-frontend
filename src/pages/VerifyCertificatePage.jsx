import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Paper,
  Divider,
  IconButton
} from '@mui/material';
import { CloudUpload, ExpandMore } from '@mui/icons-material';
import pic3 from '../assets/pic3.jpg';

const VerificationPage = () => {
  // Separate states for each card
  const [expandedCertificate, setExpandedCertificate] = useState(false);
  const [expandedDegree, setExpandedDegree] = useState(false);

  const [certificateData, setCertificateData] = useState({
    name: '',
    institution: '',
    issueDate: '',
    certificateId: ''
  });

  const [degreeData, setDegreeData] = useState({
    fullName: '',
    university: '',
    department: '',
    graduationYear: '',
    degreeFile: null
  });

  // Separate toggle handlers for each card
  const handleCertificateToggle = () => {
    setExpandedCertificate(!expandedCertificate);
  };

  const handleDegreeToggle = () => {
    setExpandedDegree(!expandedDegree);
  };

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
      {/* Top Cards Container */}
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
          borderRadius: 2
        }}>
          <CardContent>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                mb: expandedCertificate ? 2 : 0
              }}
              onClick={handleCertificateToggle}
            >
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                Certificate Verification
              </Typography>
              <ExpandMore sx={{
                transform: expandedCertificate ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s'
              }}/>
            </Box>

            {expandedCertificate && (
              <>
                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <TextField
                    label="Issuing Institution"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <TextField
                    label="Certificate ID"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: 'white',
                      color: '#7b1fa2',
                      '&:hover': { bgcolor: '#f0f0f0' }
                    }}
                    startIcon={<CloudUpload />}
                  >
                    Upload Certificate
                  </Button>
                </Box>
              </>
            )}
          </CardContent>
        </Card>

        {/* Degree Verification Card */}
        <Card sx={{
          width: 450,
          background: 'linear-gradient(145deg, #9c27b0, #7b1fa2)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: 2
        }}>
          <CardContent>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                mb: expandedDegree ? 2 : 0
              }}
              onClick={handleDegreeToggle}
            >
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                Degree Verification
              </Typography>
              <ExpandMore sx={{
                transform: expandedDegree ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s'
              }}/>
            </Box>

            {expandedDegree && (
              <>
                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Graduate Name"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <TextField
                    label="University Name"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <TextField
                    label="Graduation Year"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                    InputProps={{ sx: { color: 'white' } }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: 'white',
                      color: '#7b1fa2',
                      '&:hover': { bgcolor: '#f0f0f0' }
                    }}
                    startIcon={<CloudUpload />}
                  >
                    Upload Degree
                  </Button>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Instructions Section remains same */}
      <Paper sx={{
        width: '100%',
        maxWidth: 1200,
        bgcolor: 'rgba(255,255,255,0.9)',
        p: 3,
        borderRadius: 2,
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
      }}>
        {/* ... rest of instructions section ... */}
      </Paper>
    </Box>
  );
};

export default VerificationPage;