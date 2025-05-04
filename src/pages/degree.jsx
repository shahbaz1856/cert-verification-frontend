import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton,
  Container
} from '@mui/material';
import { CloudUpload, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import pic3 from '../assets/pic3.jpg';

const DegreeVerification = () => {
  const navigate = useNavigate();
  const [degreeData, setDegreeData] = useState({
    fullName: '',
    university: '',
    department: '',
    graduationYear: '',
    degreeFile: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDegreeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setDegreeData(prev => ({
      ...prev,
      degreeFile: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(degreeData);
    // Handle form submission logic here
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
      alignItems: 'center'
    }}>
      <Container maxWidth="md">
        <IconButton 
          onClick={() => navigate(-1)}
          sx={{ 
            color: 'white', 
            mb: 2,
            alignSelf: 'flex-start'
          }}
        >
          <ArrowBack />
        </IconButton>
        
        <Card sx={{
          background: 'linear-gradient(145deg, #9c27b0, #7b1fa2)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: 2,
          mb: 4
        }}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Degree Verification
            </Typography>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Graduate Name"
                name="fullName"
                variant="outlined"
                fullWidth
                required
                value={degreeData.fullName}
                onChange={handleChange}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  borderRadius: 1 
                }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />

              <TextField
                label="University Name"
                name="university"
                variant="outlined"
                fullWidth
                required
                value={degreeData.university}
                onChange={handleChange}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  borderRadius: 1 
                }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />

              <TextField
                label="Department"
                name="department"
                variant="outlined"
                fullWidth
                required
                value={degreeData.department}
                onChange={handleChange}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  borderRadius: 1 
                }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />

              <TextField
                label="Graduation Year"
                name="graduationYear"
                type="number"
                variant="outlined"
                fullWidth
                required
                value={degreeData.graduationYear}
                onChange={handleChange}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  borderRadius: 1 
                }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />

              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUpload />}
                sx={{
                  bgcolor: 'white',
                  color: '#7b1fa2',
                  '&:hover': { bgcolor: '#f0f0f0' }
                }}
              >
                Upload Degree Document
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.png"
                />
              </Button>

              {degreeData.degreeFile && (
                <Typography variant="body2">
                  Selected file: {degreeData.degreeFile.name}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#4a148c',
                  color: 'white',
                  '&:hover': { bgcolor: '#5c1b9a' },
                  mt: 2,
                  py: 1.5
                }}
              >
                Submit Verification Request
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default DegreeVerification;