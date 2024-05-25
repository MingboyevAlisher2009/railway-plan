import React, { useState } from "react";
import AddKuzatuvModal from "./AddKuzatuvModal";

const Kuzatuv = () => {

  const [openKuzatuvModal, setOpenKuzatuvModal] = useState();

  const AddKuzatuvModall = () => setOpenKuzatuvModal(!openKuzatuvModal);
  return (
    <>
    {openKuzatuvModal && <AddKuzatuvModal AddKuzatuvModall={AddKuzatuvModall}/>}
      <div class="mt-12 mb-8 flex flex-col gap-12 ">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 flex items-center justify-between p-6">
            <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Kuzatuv Jadvali
            </h6>
            <button
              class="text-black p-2 z-50 bg-white rounded-lg"
              type="button"
              
              onClick={AddKuzatuvModall}
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
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              +
            </button>
          </div>
          <div class="p-6 overflow-x-auto px-0 pt-0 pb-2">
            <table class="w-full min-w-[640px] ">
              <thead>
                <tr>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      #
                    </p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      F.I.O
                    </p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Km
                    </p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Amallar
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
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

export default Kuzatuv;
