import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://star-wars-api-test.herokuapp.com/api/",
});

export default ApiInstance;
