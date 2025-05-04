// src/pages/CertificateVerification.jsx
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

    console.log(certificateData);
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
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mb: 2 }}>
          <ArrowBack />
        </IconButton>

        <Card sx={{
          background: 'linear-gradient(145deg, #7b1fa2, #6a1b9a)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: 2,
          mb: 4
        }}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Certificate Verification
            </Typography>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Full Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={certificateData.name}
                onChange={handleChange}
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />
              <TextField
                label="Issuing Institution"
                name="institution"
                variant="outlined"
                fullWidth
                required
                value={certificateData.institution}
                onChange={handleChange}
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />
              <TextField
                label="Certificate ID"
                name="certificateId"
                variant="outlined"
                fullWidth
                required
                value={certificateData.certificateId}
                onChange={handleChange}
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputProps={{ sx: { color: 'white' } }}
                InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
              />
              <TextField
                label="Issue Date"
                name="issueDate"
                type="date"
                variant="outlined"
                fullWidth
                required
                value={certificateData.issueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true, sx: { color: 'rgba(255,255,255,0.7)' } }}
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}
                InputProps={{ sx: { color: 'white' } }}
              />
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUpload />}
                sx={{ bgcolor: 'white', color: '#7b1fa2', '&:hover': { bgcolor: '#f0f0f0' } }}
              >
                Upload Certificate
                <input type="file" hidden onChange={handleFileChange} accept=".pdf,.jpg,.png" />
              </Button>
              {certificateData.file && (
                <Typography variant="body2">
                  Selected file: {certificateData.file.name}
                </Typography>
              )}
              <Button type="submit" variant="contained" size="large"
                sx={{ bgcolor: '#4a148c', color: 'white', '&:hover': { bgcolor: '#5c1b9a' }, mt: 2, py: 1.5 }}
              >
                Submit Verification Request
              </Button>
            </Box>

            {verificationResult && (
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                {verificationResult.status === 'valid' ? (
                  <Typography variant="h6" color="white">
                    ✅ Certificate Verified Successfully!
                    <pre>{JSON.stringify(verificationResult.data, null, 2)}</pre>
                  </Typography>
                ) : (
                  <Typography variant="h6" color="red">
                    ❌ Certificate Not Found
                  </Typography>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CertificateVerification;
