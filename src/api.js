import axios from "axios";
import { prop } from "ramda";

/* Credentials are public, no harm done hardcoding them here */
const config = {
  locate: {
    baseURL: "https://cisco-cmx.unit.ua",
    auth: {
      username: "RO",
      password: "just4reading"
    }
  },
  presense: {
    baseURL: "https://cisco-presence.unit.ua",
    auth: {
      username: "RO",
      password: "Passw0rd"
    }
  }
};

const locateAPI = axios.create(config.locate);

export const clients = () => {
  return locateAPI.get("/api/location/v2/clients/").then(prop("data"));
};
