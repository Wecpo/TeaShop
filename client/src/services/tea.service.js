import axios from "axios";
import config from "../config.json";
import httpService from "./http.service";

// const httpAuth = axios.create({
//      baseURL: config.apiEndpoint + "/tea/",
// });

const teaService = {
     get: async () => {
          const { data } = await httpService.get(`/tea`);
          return data;
     },
};

export default teaService;
