import httpService from "./http.service";

const teaEndpoint = "tea/";

const teaService = {
     get: async () => {
          const { data } = await httpService.get(teaEndpoint);
          return data;
     },
     delete: async (teaId) => {
          const { data } = await httpService.delete(teaEndpoint + teaId);
          return data;
     },
     update: async (payload) => {
          const { data } = await httpService.patch(
               teaEndpoint + payload._id,
               payload
          );
          return data;
     },
     create: async (payload) => {
          const { data } = await httpService.post(
               teaEndpoint + `createTea`,
               payload
          );

          return data;
     },
};

export default teaService;
