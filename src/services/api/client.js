import axios from "axios";

export default axios.create({
    baseURL: "https://magazine-website-server.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});