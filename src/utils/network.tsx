import axios from "axios";

const baseNetwork = axios.create({
  baseURL: "http://localhost:3001/",
});

export default baseNetwork;
