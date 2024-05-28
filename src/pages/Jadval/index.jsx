import React, { useEffect, useState } from "react";
import AddBrigader from "./AddBrigader";
import PanelService from "../../services/panel";
import { Option, Select } from "@material-tailwind/react";

const Jadval = () => {
  const [pd, setPd] = useState([]);
  const [pdb, setPdb] = useState([]);
  const [openBrigaderModal, setOpenBrigaderModal] = useState();

  const getPd = async () => {
    const { data } = await PanelService.getPDAll();
    setPd(data.body);
  };

  const getPdb = async (e) => {
    const { data } = await PanelService.getPDBAll(e);
    setPdb(data.body);
  };

  console.log(pdb);
  useEffect(() => {
    getPd();
  }, []);

  const AddBrigaderModal = () => setOpenBrigaderModal(!openBrigaderModal);
  return (
    <>
      {openBrigaderModal && <AddBrigader AddBrigaderModal={AddBrigaderModal} />}
      <div class="mt-12 mb-8 flex flex-col gap-12 ">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 flex items-center justify-between p-6">
            <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Yo'l brigaderlar jadvali
            </h6>
            <button
              class="text-black bg-white z-50 pt-3 pb-3 pl-4 pr-4 rounded-md"
              type="button"
              onClick={AddBrigaderModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="h-6 w-6 text-black"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </button>
          </div>
          <div class="p-6 px-0 pt-0 pb-2">
            <div class="w-full flex justify-center items-center gap-5">
              <div class="w-full max-w-[24rem]">
                <div class="relative w-full min-w-[200px] h-10">
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
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px] table-auto  ">
                <thead>
                  <tr>
                    <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                        #
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                        Brigaderlar
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                        F.I.O
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                        Amallar
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pdb &&
                    pdb.map((item) => (
                      <tr className="py-3 px-5" key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.userFullName}</td>
                        <td>
                          <svg
                            className="hover:fill-yellow-500"
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 576 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
                          </svg>
                        </td>
                      </tr>
                    ))}
                  {pdb.length === 0 && (
                    <tr>
                      <td></td>
                      <td></td>
                      <td class="">
                        <p class="block antialiased font-sans cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600">
                          Ma'lumot yo'q
                        </p>
                      </td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div class="text-blue-gray-600">
        <footer class="py-2">
          <div class="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
              © 2024
              <a
                class="text-blue-600 hover:underline mx-1"
                target="_blank"
                href="https://itca.vercel.app/"
              >
                IT City Academy
              </a>{" "}
              barcha huquqlar himoyalangan.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Jadval;
