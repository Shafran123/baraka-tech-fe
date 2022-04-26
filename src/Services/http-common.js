import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:2400/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});