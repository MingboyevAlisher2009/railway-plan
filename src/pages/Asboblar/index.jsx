import React, { useState } from "react";
import AsboblarModal from "./AsboblarModal";
import TahrirModal from "./TahrirModal";

const Asboblar = () => {
  const [openModal, setOpenModal] = useState();
  const [openTahrirModal, setOpenTahrirModal] = useState();

  const AddIshQurol = () => setOpenModal(!openModal);
  const AddTahrirModal = () => setOpenTahrirModal(!openTahrirModal)
   return (
    <>
      {openModal && <AsboblarModal AddIshQurol={AddIshQurol} />}
      {openTahrirModal && <TahrirModal AddTahrirModal={AddTahrirModal}/>}
      <div class="mt-12 mb-8 flex flex-col gap-12 ">
        <div class=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 flex items-center justify-between p-6">
            <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Ish qurollar jadvali
            </h6>
            <button
              onClick={AddIshQurol}
              className="text-black p-2 z-[50] bg-white rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00"
                aria-hidden="true"
                class="h-6 w-6 text-black inline-block"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                  clip-rule="evenodd"
                ></path>
                <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z"></path>
                <path
                  fill-rule="evenodd"
                  d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              +
            </button>
          </div>
          <div class="p-6 overflow-x-auto px-0 pt-0 pb-2">
            <table class="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      #
                    </p>
                  </th>
                  <th class="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p class="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      Ish quroli nomi
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
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">
                          1
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                          Lom
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50 flex py-5 gap-3">
                    <p class="block antialiased font-sans cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out text-blue-gray-600"
                    onClick={AddTahrirModal}
                    >
                      <svg
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
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">
                          2
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                          Domkrat
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50 flex py-5 gap-3">
                    <p class="block antialiased font-sans cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out text-blue-gray-600"
                    onClick={AddTahrirModal}

                    >
                      <svg
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
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">
                          3
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50">
                    <div class="flex items-center gap-4">
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                          Eshp
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-3 px-5  border-b border-blue-gray-50 flex py-5 gap-3">
                    <p class="block antialiased font-sans cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out text-blue-gray-600"
                    onClick={AddTahrirModal}

                    >
                      <svg
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
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Asboblar;
