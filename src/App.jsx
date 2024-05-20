import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-admin" element={<GlobalPage />}>
          <Route path="boshqaru-paneli" element={<MainPage />} />
          <Route path="hodimlar" element={<Hodimlar />} />
          <Route path="pd" element={<YolUstalari />} />
          <Route path="jadval" element={<Jadval />} />
          <Route path="kuzatuv" element={<Kuzatuv />} />
          <Route path="asboblar" element={<Asboblar />} />
          <Route path="manzil" element={<Manzil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
