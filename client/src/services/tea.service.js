import axios from "axios";
import config from "../config.json";
import httpService from "./http.service";

const teaEndpoint = "tea/";

const teaService = {
     get: async () => {
          const { data } = await httpService.get(teaEndpoint);
          return data;
     },
     delete: async (teaId) => {
          const { data } = await httpService.delete(teaEndpoint + teaId);
          // console.log(data);
          return data;
     },
};

export default teaService;
