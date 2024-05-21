import axios from "./api";

const PanelService = {
  getPDAll: async () => {
    const { data } = await axios.get("/api/pd/all");
    return { data };
  },
  getPDBAll: async (id) => {
    const { data } = await axios.get(`/api/pdb/list?pdId=${id}`);
    return { data };
  },
  getRailway: async (id) => {
    const { data } = await axios.get(`/api/railway/list?pdbId=${id}`);
    return { data };
  },
  getPk: async (id) => {
    const { data } = await axios.get(`/api/pk?railwayId=${id}`);
    return { data };
  },
};

export default PanelService;
