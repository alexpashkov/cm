import axios from "axios";
import { prop } from "ramda";

/* Credentials are public, no harm done hardcoding them here */
const config = {
  baseURL: "https://cisco-cmx.unit.ua",
  auth: {
    username: "RO",
    password: "just4reading"
  }
};

const API = axios.create(config);

API.interceptors.response.use(prop("data"));

export const clients = () => API.get("/api/location/v2/clients/");
