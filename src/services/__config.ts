import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "http://localhost:9000/api/",
});

export default ApiInstance;
