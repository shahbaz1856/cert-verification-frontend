import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profilePicture: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Fetch user data (can be replaced with actual API call)
  useEffect(() => {
    // Simulating fetching user data from an API or auth service
    const fetchUserData = async () => {
      try {
        // Replace this with actual API call to fetch user data
        const response = await axios.get('/api/user'); // Example endpoint
        setUserData(response.data);
      } catch (error) {
        setMessage('Error fetching user data');
        setOpenSnackbar(true);
      }
    };

    fetchUserData();
  }, []);

  // Handle form submission to update user profile
  const handleSaveProfile = async () => {
    try {
      // Make an API call to save the updated data
      // Replace with actual API endpoint
      const response = await axios.put('/api/user', userData);
      setMessage('Profile updated successfully');
      setOpenSnackbar(true);
      setIsEditing(false);
    } catch (error) {
      setMessage('Error updating profile');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Profile Page
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Display user profile information */}
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <TextField
          label="Profile Picture URL"
          variant="outlined"
          name="profilePicture"
          value={userData.profilePicture}
          onChange={handleChange}
          disabled={!isEditing}
        />
        {isEditing ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleSaveProfile}
              color="primary"
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={() => setIsEditing(false)}
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            onClick={() => setIsEditing(true)}
            color="primary"
          >
            Edit Profile
          </Button>
        )}
      </Box>

      {/* Snackbar for showing success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={message}
      />
    </Box>
  );
};

export default Profile;
