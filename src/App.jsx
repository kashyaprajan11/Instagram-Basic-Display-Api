import { useState, useEffect } from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";

function App() {
  useEffect(() => {
    console.log(window.location.href);
  }, []);
  const getInstagramAccessCode = () => {
    let code = "";
    window.location.replace(
      "https://api.instagram.com/oauth/authorize?client_id=612567580316276&redirect_uri=https://instagram-basic-display-api.vercel.app/&scope=user_profile,user_media&response_type=code"
    );
  };

  return (
    <Box>
      <TextField />
      <Button onClick={getInstagramAccessCode}>Send me to my instagram</Button>
    </Box>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import { Box, Stack, Button, Typography, TextField } from "@mui/material";

// import axios from "axios";

// const access_token =
//   "AQBpPxzUGJ5SqspBPvBO7xmP49JYv9hjhkQ9u3Un7ZobaSIHD71fHsIhLPZ_7LTPj6zyOzV8wCZXh6euphEe9m-CEccxjTMzk92U35osTwsvcLOEqzDQK5acayTFYB3gWdpMUSBT924SuIMQAnNbQqH2X28EqA0YFj2-Yq9zAiK82K5roRudLmnmZ7t_igRB9CBjjs4zulHs6vPBPh1N5yV_WhEabjM1iUAfDbPQoC3z9g";

// const linkToMediaIds = `https://graph.instagram.com/17841407737368364?fields=id,username,media&access_token=${access_token}`;

// function App() {
//   const [data, setData] = useState([]);
//   const [mediaData, setMediaData] = useState([]);
//   useEffect(() => {
//     axios.get(linkToMediaIds).then((response) => console.log(response));
//   }, []);

//   useEffect(() => {
//     data.map((mediaId) =>
//       axios
//         .get(
//           `https://graph.instagram.com/${mediaId.id}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`
//         )
//         .then((response) => setMediaData(response))
//     );
//   }, [data]);
//   return (
//     <Box>
//       <TextField />
//       <Button>Send me to my instagram</Button>
//     </Box>
//   );
// }

// export default App;
