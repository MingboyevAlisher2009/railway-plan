import React from "react";

const AsboblarModal = ({ AddIshQurol }) => {
  return (
    <>
      <div className="bg-black/50 flex items-center justify-center fixed w-full z-[100] left-0 top-0 h-full">
        <span
          data-type="inside"
          tabindex="0"
          aria-hidden="true"
          data-floating-ui-focus-guard=""
          data-aria-hidden="true"
        ></span>
        <div
          tabindex="-1"
          class="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[40%] 2xl:min-w-[40%] max-w-[40%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]"
          aria-labelledby=":r2f:-label"
          aria-describedby=":r2f:-description"
          id=":r2g:"
          role="dialog"
        >
          <div class="shrink-0 p-4 text-blue-gray-900 antialiased font-sans text-2xl font-semibold leading-snug flex items-center justify-between">
            Ish quroli qo'shish
            <svg
              onClick={AddIshQurol}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="cursor-pointer"
              width="20"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed">
            <div class="flex justify-center flex-col items-center gap-7">
              <div class="w-full max-w-[24rem]">
                <div class="relative w-full min-w-[200px] h-10">
                  <input
                    required=""
                    id="addtool"
                    class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Ish quroli nomi{" "}
                    <span class="inline-block text-red-500 ml-0.5">*</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end shrink-0 flex-wrap p-4 text-blue-gray-500">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-red-500 hover:bg-red-500/10 active:bg-red-500/30 mr-1"
              type="button"
              onClick={AddIshQurol}
            >
              <span>Orqaga</span>
            </button>
            <span class="cursor-not-allowed">
              <button
                disabled=""
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85]"
                type="button"
              >
                <span>Qo'shish</span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <span
        data-type="inside"
        tabindex="0"
        aria-hidden="true"
        data-floating-ui-focus-guard=""
        data-aria-hidden="true"
      ></span>
    </>
  );
};

export default AsboblarModal;
