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
  Container,
  Fade,
  Grow,
  Slide,
  Avatar,
  Collapse,
  Paper
} from '@mui/material';
import { CloudUpload, ArrowBack, CheckCircle, Cancel, VerifiedUser } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import pic3 from '../assets/pic3.jpg';
import { mockCertificates } from '../data/certificate';

const CertificateVerification = () => {
  const navigate = useNavigate();
  const [certificateData, setCertificateData] = useState({
    name: '',
    institution: '',
    issueDate: '',
    certificateId: '',
    file: null
  });
  const [verificationResult, setVerificationResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificateData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setCertificateData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const matchedCert = mockCertificates.find(cert =>
        cert.name.toLowerCase() === certificateData.name.toLowerCase() &&
        cert.institution.toLowerCase() === certificateData.institution.toLowerCase() &&
        cert.certificateId === certificateData.certificateId
      );

      if (matchedCert) {
        setVerificationResult({ status: 'valid', data: matchedCert });
      } else {
        setVerificationResult({ status: 'invalid' });
      }
      setIsSubmitting(false);
    }, 1500);
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
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <Container maxWidth="md">
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <IconButton 
            onClick={() => navigate(-1)} 
            sx={{ 
              color: 'white', 
              mb: 2,
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s'
              }
            }}
          >
            <ArrowBack fontSize="large" />
          </IconButton>
        </Slide>

        <Grow in={true}>
          <Card sx={{
            background: 'linear-gradient(145deg, #7b1fa2, #6a1b9a)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            borderRadius: 2,
            mb: 4,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
            }
          }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VerifiedUser sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Certificate Verification
                </Typography>
              </Box>
              <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
              
              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 3,
                  '& .MuiTextField-root': {
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.4) !important',
                    },
                  }
                }}
              >
                {['name', 'institution', 'certificateId'].map((field) => (
                  <TextField
                    key={field}
                    label={
                      field === 'name' ? 'Full Name' : 
                      field === 'institution' ? 'Issuing Institution' : 'Certificate ID'
                    }
                    name={field}
                    variant="outlined"
                    fullWidth
                    required
                    value={certificateData[field]}
                    onChange={handleChange}
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      borderRadius: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.01)'
                      }
                    }}
                    InputProps={{ 
                      sx: { 
                        color: 'white',
                        fontSize: '1.1rem'
                      } 
                    }}
                    InputLabelProps={{ 
                      sx: { 
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1.1rem'
                      } 
                    }}
                  />
                ))}

                <TextField
                  label="Issue Date"
                  name="issueDate"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  value={certificateData.issueDate}
                  onChange={handleChange}
                  InputLabelProps={{ 
                    shrink: true, 
                    sx: { 
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '1.1rem'
                    } 
                  }}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    borderRadius: 1,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.01)'
                    }
                  }}
                  InputProps={{ 
                    sx: { 
                      color: 'white',
                      fontSize: '1.1rem'
                    } 
                  }}
                />

                <Button
                  variant="contained"
                  component="label"
                  startIcon={<CloudUpload />}
                  sx={{ 
                    bgcolor: 'white', 
                    color: '#7b1fa2', 
                    '&:hover': { 
                      bgcolor: '#f0f0f0',
                      transform: 'scale(1.02)'
                    },
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                >
                  Upload Certificate
                  <input type="file" hidden onChange={handleFileChange} accept=".pdf,.jpg,.png" />
                </Button>

                {certificateData.file && (
                  <Fade in={true}>
                    <Paper elevation={3} sx={{ 
                      p: 2, 
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <CloudUpload sx={{ mr: 1 }} />
                      <Typography variant="body1">
                        {certificateData.file.name}
                      </Typography>
                    </Paper>
                  </Fade>
                )}

                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  disabled={isSubmitting}
                  sx={{ 
                    bgcolor: '#4a148c', 
                    color: 'white', 
                    '&:hover': { 
                      bgcolor: '#5c1b9a',
                      transform: 'scale(1.02)'
                    }, 
                    mt: 2, 
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}
                >
                  {isSubmitting ? 'Verifying...' : 'Submit Verification Request'}
                </Button>
              </Box>

              <Collapse in={verificationResult !== null}>
                <Box sx={{ 
                  mt: 4,
                  textAlign: 'center',
                  animation: verificationResult ? 'pulse 0.5s' : ''
                }}>
                  {verificationResult?.status === 'valid' ? (
                    <Paper elevation={4} sx={{ 
                      p: 3, 
                      bgcolor: 'rgba(76, 175, 80, 0.2)',
                      borderLeft: '5px solid #4CAF50'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircle sx={{ fontSize: 40, color: '#4CAF50', mr: 2 }} />
                        <Typography variant="h5" color="#4CAF50" fontWeight="bold">
                          Certificate Verified Successfully!
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        textAlign: 'left',
                        p: 2,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 1,
                        mt: 2
                      }}>
                        <Typography variant="h6" gutterBottom>
                          <strong>Name:</strong> {verificationResult.data.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          <strong>Institution:</strong> {verificationResult.data.institution}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          <strong>Certificate ID:</strong> {verificationResult.data.certificateId}
                        </Typography>
                        <Typography variant="h6">
                          <strong>Issue Date:</strong> {verificationResult.data.issueDate}
                        </Typography>
                      </Box>
                      
                      <Avatar sx={{ 
                        bgcolor: '#4CAF50', 
                        width: 80, 
                        height: 80, 
                        m: '20px auto',
                        animation: 'bounce 2s infinite'
                      }}>
                        <CheckCircle sx={{ fontSize: 50 }} />
                      </Avatar>
                    </Paper>
                  ) : verificationResult?.status === 'invalid' ? (
                    <Paper elevation={4} sx={{ 
                      p: 3, 
                      bgcolor: 'rgba(244, 67, 54, 0.2)',
                      borderLeft: '5px solid #F44336'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Cancel sx={{ fontSize: 40, color: '#F44336', mr: 2 }} />
                        <Typography variant="h5" color="#F44336" fontWeight="bold">
                          Certificate Not Verified
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" paragraph>
                        The certificate details you provided could not be verified in our system.
                      </Typography>
                      
                      <Typography variant="body1">
                        Please check the information and try again, or contact the issuing institution.
                      </Typography>
                      
                      <Avatar sx={{ 
                        bgcolor: '#F44336', 
                        width: 80, 
                        height: 80, 
                        m: '20px auto',
                        animation: 'shake 0.5s'
                      }}>
                        <Cancel sx={{ fontSize: 50 }} />
                      </Avatar>
                    </Paper>
                  ) : null}
                </Box>
              </Collapse>
            </CardContent>
          </Card>
        </Grow>
      </Container>
    </Box>
  );
};

export default CertificateVerification;