import React from "react";
import { useEffect, useState } from "react";

const Hodimlar = () => {
  const URL = "https://jsonplaceholder.typicode.com/users"
  const [hodimlar, setHodimlar] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setHodimlar(json));
    console.log(hodimlar);
  }, []);
  return (
    <section>
      <div className="mt-12 mb-8 flex flex-col gap-12 ">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 flex items-center justify-between p-6">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Hodimlar jadvali</h6>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#fff] text-black px-3 py-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 text-black" aria-hidden="true">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">#</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">ism</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">familiya</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">telefon raqami</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">lavozimi</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">amallar</p>
                  </th>
                </tr>
              </thead>
              {hodimlar.map((item) => (
                <tbody>
                <tr className="border-b">
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div><p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{item.id}</p></div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div><p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{item.name}</p></div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div><p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{item.username}</p></div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div><p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{item.phone}</p></div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div><p className="block antialiased font-sans text-sm leading-normal font-semibold text-blue-gray-600">{item.company.name}</p></div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <p className="block antialiased font-sans font-light cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black"></p>
                    <p className="block antialiased font-sans font-light mx-3 cursor-pointer text-[1.2rem] duration-200 text-blue-gray-600 hover:text-black"></p>
                  </td>
                </tr>
              </tbody>
              ))}
            </table>
            </div>
        </div>
      </div>
      <div className="text-blue-gray-600">
        <footer class="py-2">
          <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">© 2024 <a href="https://itca.vercel.app" className="text-blue-600 hover:underline mx-1" target="_blank">IT City Academy</a> barcha huquqlar himoyalangan.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Hodimlar;
