// src/pages/Profile.jsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "Student",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Here you could store in localStorage or just show a message
    console.log("Profile saved:", profile);
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Profile</Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Role"
        name="role"
        value={profile.role}
        onChange={handleChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ mt: 2 }}
      >
        Save
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Profile saved!"
      />
    </Box>
  );
};

export default Profile;
