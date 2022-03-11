import SpotifyWebApi from "spotify-web-api-node";

const scopes = [

    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-collaborative",
    "streaming",
    "playlist-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(',');

const params = {
    scope:scopes,
};
const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = 
    "https://accounts.spotify.com/authorize?" + queryParamsString.toString();
    
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;

export { LOGIN_URL };