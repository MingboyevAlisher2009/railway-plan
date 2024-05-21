import React, { useEffect, useState } from "react";

const Table = ({ items }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(items);
  }, [items]);

  return (
    <div className="mt-10">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-white border-b-2 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Pk
              </th>
              <th scope="col" class="px-6 py-3">
                MA'LUMOTLAR
              </th>
              <th scope="col" class="px-6 py-3">
                ISH JARAYONIDA
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data &&
              data.map((item) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th class="px-6 py-4 text-lg font-medium text-gray-900  dark:text-white">
                    {item.id}
                  </th>
                  <td class="px-6 mt-3   flex gap-2 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {item.name}
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="py-2 px-5 text-base font-bold text-white rounded-lg bg-gray-600">
                        Bugungi
                      </button>
                      <button className="py-2 px-5 text-base font-bold text-white rounded-lg bg-gray-600">
                        Ertangi
                      </button>
                      <button className="py-2 px-5 text-base font-bold text-white rounded-lg bg-gray-600">
                        Ish qurollari
                      </button>
                      <button className="py-2 px-5 text-base font-bold text-white rounded-lg bg-gray-600">
                        Qo'shimcha
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-xl">✖</td>
                </tr>
              ))}
            {data.length === 0 && (
              <tr className="text-base px-6 py-4 mt-10 text-black font-bold">
                MA'LUMOTLAR TOPILMADI❌
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
