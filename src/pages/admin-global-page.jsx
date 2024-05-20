import React from "react";
import Saidbar from "../components/Saidbar";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

const GlobalPage = () => {
  return (
    <div className="flex justify-between p-4">
      <div>
        <Saidbar />
        <section className="ml-80">
          <Navbar />
        </section>
      </div>
      <main className="mt-28 !w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default GlobalPage;
