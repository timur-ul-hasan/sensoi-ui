const env = () => process.env;
const baseURL = env().REACT_APP_URL;
const facebookClientID = env().REACT_APP_FACEBOOK;
const googleClientID = env().REACT_APP_GOOGLE;
const mapboxID = env().REACT_APP_MAPBOX;

export { baseURL, facebookClientID, googleClientID, mapboxID };
