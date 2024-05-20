import React from "react";

const Panel = () => {
  return (
    <div className="mt-20 pt-14 pb-5 w-full relative px-5 rounded-xl bg-white">
      <div className="text-white w-[96.5%] absolute -top-10 flex rounded-xl justify-between items-center bg-gradient-to-tr from-[#212121] to-[#404040] p-5">
        <h1 className="text-lg font-medium">Boshqsruv paneli</h1>
        <button className="p-2 px-6 shadow-md shadow-green-500/20 hover:shadow-lg bg-[#4da852] rounded-lg">
          Yuklash
        </button>
      </div>
      <div>
        <button className="border-2 w-52 rounded-lg p-2 flex justify-between focus:border-black ">
          <p>Yo'l ustalari</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Panel;
