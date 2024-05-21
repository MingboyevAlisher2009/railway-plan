import axios from "./api";

const MainPageServices = {
  getDataSuperAdmin: async () => {
    const { data } = await axios.get("/api/user/statistic/admin");
    return { data };
  },
  getUserStatistic: async () => {
    const { data } = await axios.get("/api/user/statistic");
    return { data };
  },
};

export default MainPageServices;
