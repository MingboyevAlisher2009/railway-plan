import axios from "./api";

const AuthService = {
  login: async (userData) => {
    const { data } = await axios.post("/api/auth/login", userData);
    return { data };
  },
};

export default AuthService;
