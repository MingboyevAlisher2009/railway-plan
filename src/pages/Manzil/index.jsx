import React, { useEffect, useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import PanelService from "../../services/panel";
import Table from "./table";
// import { FaRegEdit } from "react-icons/fa";

const Manzil = () => {
  const [openModal, setOpenModal] = useState(false);
  const [jomSelected, setJomSelected] = useState(false);
  const [kmValue, setKmValue] = useState("");
  const [pd, setPd] = useState([]);
  const [pdb, setPdb] = useState([]);
  const [railway, setRailway] = useState([]);

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

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleJomChange = (event) => {
    if (event.target.value === "option1") {
      setJomSelected(true);
    } else {
      setJomSelected(false);
    }
  };

  const handleInputChange = (event) => {
    setKmValue(event.target.value);
  };

  useEffect(() => {
    getPd();
  }, []);

  return (
    <div>
      <div className="w-full pl-4 pr-4 h-full shadow-md bg-white min-h-60 rounded-lg">
        <div className="w-full rounded-xl h-20 relative -top-4 bg-custom-gray flex items-center pl-6 pr-6">
          <h1 className="text-white text-base mr-32">
            Yo'l Masofalari Jadvali
          </h1>
          <button
            onClick={toggleModal}
            className="w-14 h-9 bg-white rounded-md ml-96 relative left-96 flex items-center justify-center text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-6 w-6 text-black inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            +
          </button>
        </div>
        <div className="bg-transparent pt-2 text-lg pl-5">
          <h1>KM ma'lumotini olish uchun</h1>
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
        </div>
        <div className="bg-transparent h-auto min-h-10 mt-5">
          <div class="relative overflow-x-auto">
            <Table railway={railway} />
          </div>

          {/* <div className='flex justify-center'>
            <h2 className='hover:text-red-600 cursor-pointer'>Malumot yo'q</h2>
          </div> */}
        </div>
      </div>
      <Dialog open={openModal} handler={toggleModal} className="w-auto">
        <DialogHeader>
          <div className="flex items-center ">
            <h1 className="">KM qo'shish</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col pl-10 pr-10 items-center justify-center">
            <input
              type="number"
              className="w-80 h-11 mb-4 border border-gray-300 rounded-md p-1"
              placeholder="KM*"
              value={kmValue}
              onChange={handleInputChange}
            />
            <div className="flex flex-col items-center justify-center">
              <select className="mb-4 block appearance-none w-80 bg-white border text-gray-400 border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded">
                <option value="" disabled selected hidden>
                  Bo'linmani tanlang
                </option>
                <option value="option1">JOM</option>
              </select>
              <select className="block appearance-none w-80 bg-white border border-gray-300 text-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded">
                <option value="" disabled selected hidden>
                  Brigadani tanlang
                </option>
                <option value="option1">PDB-1</option>
                <option value="option2">PDB-2</option>
              </select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={toggleModal}
            className="text-red-400 hover:bg-red-100 mr-3"
          >
            <span>Orqaga</span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={toggleModal}
            className={`text-white ${
              kmValue
                ? "bg-black cursor-pointer"
                : "bg-black cursor-not-allowed"
            }`}
            disabled={!kmValue}
          >
            <span>Qo'shish</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Manzil;
