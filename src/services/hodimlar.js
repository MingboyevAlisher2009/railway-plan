import axios from "./api";

const HodimlarService = {
  getEmployees: async () => {
    const { data } = await axios.get("/api/user/leaders");
    return { data };
  },
};

export default HodimlarService;
