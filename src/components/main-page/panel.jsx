import { Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Table from "./table";
import PanelService from "../../services/panel";
import DownloadModal from "./download-modal";

const Panel = () => {
  const [pd, setPd] = useState([]);
  const [pdb, setPdb] = useState([]);
  const [railway, setRailway] = useState([]);
  const [pk, setPk] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getPd = async () => {
    const { data } = await PanelService.getPDAll();
    setPd(data.body);
  };

  const getPdb = async (e) => {
    const { data } = await PanelService.getPDBAll(e);
    setPdb(data.body);
  };

  const getRailway = async (e) => {
    const { data } = await PanelService.getRailway(e);
    setRailway(data.body);
  };

  const getPk = async (e) => {
    const { data } = await PanelService.getPk(e);
    setPk(data.body);
  };

  useEffect(() => {
    getPd();
  }, []);

  return (
    <>
      <DownloadModal toggle={toggle} setToggle={setToggle} />
      <div className="mt-20 pt-14 pb-5 w-full relative px-5 rounded-xl bg-white">
        <div className="text-white w-[96.5%] absolute -top-10 flex rounded-xl justify-between items-center bg-gradient-to-tr from-[#212121] to-[#404040] p-5">
          <h1 className="text-lg font-medium">Boshqsruv paneli</h1>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 px-6 shadow-md shadow-green-500/20 hover:shadow-lg bg-[#4da852] rounded-lg"
          >
            Yuklash
          </button>
        </div>
        <div className="flex mt-10 gap-6">
          <div className="w-60">
            <Select onChange={getPdb} size="lg" label="Yo'l ustalari">
              {pd && pd.length ? (
                pd.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option disabled>Ma'lumot yo'q</Option>
              )}
            </Select>
          </div>
          <div className="w-60">
            <Select onChange={getRailway} size="lg" label="Yo'l birigadalari">
              {pdb && pdb.length ? (
                pdb.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))
              ) : (
                <Option disabled>Ma'lumot yo'q</Option>
              )}
            </Select>
          </div>
          <div className="w-60">
            <Select onChange={getPk} size="lg" label="Km lar">
              {railway && railway.length ? (
                railway.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.km} km
                  </Option>
                ))
              ) : (
                <Option disabled>Ma'lumot yo'q</Option>
              )}
            </Select>
          </div>
        </div>
        <Table items={pk} />
      </div>
    </>
  );
};

export default Panel;
