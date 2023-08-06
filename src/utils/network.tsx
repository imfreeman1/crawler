import axios from "axios";

const baseNetwork = axios.create({
  baseURL: "http://localhost:3000/",
});

export default baseNetwork;
