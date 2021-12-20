import SpotifyWebApi from "spotify-web-api-node";

// Authorization scopes (used to access the users spotify data)
// By using join it converts array of elements in to single string
const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-position",
].join(",");

const params = {
  scope: scopes,
};

// Converts scope string into search param string
const queryParamString = new URLSearchParams(params);

// Passing param string into authorize rule
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
export { LOGIN_URL };
