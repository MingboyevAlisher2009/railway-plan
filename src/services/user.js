import axios from "./api";

const UserService = {
  getMe: async () => {
    const { data } = await axios.get("/api/user/getMe");
    return { data };
  },
  editUser: async (userData) => {
    const { data } = await axios.put(
      `/api/user/update?id=${userData.id}`,
      userData
    );
    return { data };
  },
};

export default UserService;
