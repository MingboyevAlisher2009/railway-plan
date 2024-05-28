import axios from "./api";

const JadvalService = {
  addPd: async (pdData) => {
    const { data } = await axios.post("/api/pdb", pdData);
    return {data}
  },

};

export default JadvalService
