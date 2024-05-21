import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Asboblar,
  Hodimlar,
  Home,
  Jadval,
  Kuzatuv,
  MainPage,
  Manzil,
  YolUstalari,
} from "./pages";
import GlobalPage from "./pages/admin-global-page";
import Login from "./pages/Login";
import { getItem } from "./helpers/storege";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const token = getItem("token");
  const role = getItem("role");
  const [admin, setAdmin] = useState();
  const [leader, setLeader] = useState();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    if (
      (token && role === "ROLE_SUPER_ADMIN") ||
      (token && role === "ROLE_ADMIN")
    ) {
      setAdmin(true);
      navigate("/super-admin/boshqaruv-paneli");
    }
    if (token && role === "ROLE_LEADER") {
      setLeader(true);
      navigate("/leader/boshqaruv-paneli");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {admin && (
          <Route path="/super-admin" element={<GlobalPage />}>
            <Route path="boshqaruv-paneli" element={<MainPage />} />
            <Route path="hodimlar" element={<Hodimlar />} />
            <Route path="pd" element={<YolUstalari />} />
            <Route path="jadval" element={<Jadval />} />
            <Route path="kuzatuv" element={<Kuzatuv />} />
            <Route path="asboblar" element={<Asboblar />} />
            <Route path="manzil" element={<Manzil />} />
          </Route>
        )}
        {leader && (
          <Route path="/leader" element={<GlobalPage />}>
            <Route path="boshqaruv-paneli" element={<h1>Leader page</h1>} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
