import React, { useState } from "react";
import AddBrigader from "./AddBrigader";

const Jadval = () => {

  const [openBrigaderModal, setOpenBrigaderModal] = useState();

  const AddBrigaderModal = () => setOpenBrigaderModal(!openBrigaderModal)
  return (
    <>
    {openBrigaderModal && <AddBrigader AddBrigaderModal={AddBrigaderModal}/>}
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
                  <button
                    type="button"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200"
                    aria-expanded="false"
                    aria-haspopup="listbox"
                    role="combobox"
                  >
                    <span class="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5"></span>
                    <div class="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-blue-gray-400 before:border-transparent after:border-transparent">
                    Bo'linmani tanlang
                  </label>
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
