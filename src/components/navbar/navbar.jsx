import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[77%] bg-white z-50 flex justify-between fixed border-2 rounded-lg p-3">
      <div>
        <ol class="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
          <li class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
            <Link to="/super-admin/">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
                Super-admin
              </p>
            </Link>
            <span class="text-blue-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
              /
            </span>
          </li>
          <li class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
              Boshqaruv-paneli
            </p>
          </li>
        </ol>
        <h5 className="mt-1 font-bold">Boshqaruv-Paneli</h5>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Elnur</span>
          <img
            src="https://cdn-icons-png.freepik.com/512/6596/6596121.png"
            alt="item-1"
            class="inline-block relative object-cover object-center !rounded-full w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
