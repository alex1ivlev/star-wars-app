import axios from "axios";

const linkURL = axios.create({
    baseURL: "https://swapi.dev/api/films"
})


 export default linkURL;
