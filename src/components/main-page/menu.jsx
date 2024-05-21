import React, { useEffect, useState } from "react";
import MainPageServices from "../../services/main-page";

const Menu = () => {
  const [userStatistic, setUserStatistic] = useState({});

  const getUserStatistcs = async () => {
    const { data } = await MainPageServices.getUserStatistic();
    setUserStatistic(data.body);
  };

  useEffect(() => {
    getUserStatistcs();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 mt-10">
      <article className="flex justify-between w-full border bg-white p-3 rounded-xl">
        <div class="bg-clip-border w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-[#212121] to-[#404040] text-white shadow-gray-900/20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <span className="text-sm text-gray-400">Kuzatuvchilar soni</span>
          <h2 className="text-4xl font-bold">{userStatistic.countAdmin}</h2>
        </div>
      </article>
      <article className="flex justify-between w-full border bg-white p-3 rounded-xl">
        <div class="bg-clip-border w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <span className="text-sm text-gray-400">Lederlar soni soni</span>
          <h2 className="text-4xl font-bold">{userStatistic.leaderCount}</h2>
        </div>
      </article>
      <article className="flex justify-between w-full border bg-white p-3 rounded-xl">
        <div class="bg-clip-border w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <span className="text-sm text-gray-400">Yo'l ustlari soni</span>
          <h2 className="text-4xl font-bold">{userStatistic.countPd}</h2>
        </div>
      </article>
      <article className="flex justify-between w-full border bg-white p-3 rounded-xl">
        <div class="bg-clip-border w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <span className="font-medium text-gray-400">
            Yo'l brigadalari soni
          </span>
          <h2 className="text-4xl font-bold">{userStatistic.countPdb}</h2>
        </div>
      </article>
    </div>
  );
};

export default Menu;
