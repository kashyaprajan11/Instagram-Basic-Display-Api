import { useState, useEffect } from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import axios from "axios";

const CLIENT_ID = "612567580316276";
const CLIENT_SECRET = "ccbaee38fb6dbef29ed3828a68f2faf6";

function App() {
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("code") === -1) return null;
    const code = url.substring(url.indexOf("code") + 5).slice(0, -2);
    console.log("code", code);
    setCode(code);
  }, []);

  const [code, setCode] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    axios
      .post("https://api.instagram.com/oauth/access_token", {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: "https://instagram-basic-display-api.vercel.app/",
        code: code,
      })
      .then((response) => console.log("resoponse on post", response))
      .catch((error) => console.log("error", error));
  }, [code]);

  // https://api.instagram.com/oauth/access_token \
  // -F client_id=684477648739411 \
  // -F client_secret=eb8c7... \
  // -F grant_type=authorization_code \
  // -F redirect_uri=https://socialsizzle.herokuapp.com/auth/ \
  // -F code=AQDp3TtBQQ...

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
