import { useState, useEffect } from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";

function App() {
  const getInstagramAccessCode = () => {
    let code = "";
    window.location.replace(
      "https://api.instagram.com/oauth/authorize?client_id=612567580316276&redirect_uri=https://instagram-basic-display-api.vercel.app/&scope=user_profile,user_media&response_type=code"
    );
    console.log(window.location.href);
  };

  return (
    <Box>
      <TextField />
      <Button onClick={getInstagramAccessCode}>Send me to my instagram</Button>
    </Box>
  );
}

export default App;
