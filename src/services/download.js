import axios from "./api";

const DownloadService = {
  download: async (date) => {
    const { data } = await axios.post(`/api/download?date=${date}`);
    return { data };
  },
};

export default DownloadService;