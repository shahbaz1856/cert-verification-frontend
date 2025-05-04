import React from 'react';
import degrees from '../data/degree';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
  IconButton,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack
} from '@mui/material';
import { ArrowBack, CheckCircle, Cancel } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import pic3 from '../assets/pic3.jpg';

const DegreeList = () => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    return status.toLowerCase() === 'verified' ? 'success' : 'error';
  };

  const getStatusIcon = (status) => {
    return status.toLowerCase() === 'verified' ? (
      <CheckCircle color="success" fontSize="small" sx={{ ml: 1 }} />
    ) : (
      <Cancel color="error" fontSize="small" sx={{ ml: 1 }} />
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(74, 20, 140, 0.8), rgba(106, 27, 154, 0.8)), url(${pic3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ color: 'white', mb: 2, alignSelf: 'flex-start' }}
        >
          <ArrowBack />
        </IconButton>

        <Card
          sx={{
            background: 'linear-gradient(145deg, #9c27b0, #7b1fa2)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            borderRadius: 2,
            mb: 4
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Degree Verification Records
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />

            <TableContainer
              component={Paper}
              sx={{ backgroundColor: 'white', borderRadius: 2 }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Full Name</strong></TableCell>
                    <TableCell><strong>University</strong></TableCell>
                    <TableCell><strong>Department</strong></TableCell>
                    <TableCell><strong>Graduation Year</strong></TableCell>
                    <TableCell><strong>Degree Info</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {degrees.map((deg) => (
                    <TableRow key={deg.id}>
                      <TableCell>{deg.fullName}</TableCell>
                      <TableCell>{deg.university}</TableCell>
                      <TableCell>{deg.department}</TableCell>
                      <TableCell>{deg.graduationYear}</TableCell>
                      <TableCell>
                        <Stack direction="column">
                          <Typography variant="body2" fontWeight={600}>
                            {deg.degreeFileName}
                          </Typography>
                          <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                            <Chip
                              label={deg.status}
                              color={getStatusColor(deg.status)}
                              size="small"
                            />
                            {getStatusIcon(deg.status)}
                          </Stack>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default DegreeList;
