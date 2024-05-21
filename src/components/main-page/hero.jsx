import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import MainPageServices from "../../services/main-page";

const Hero = () => {
  const [toggle, setTogle] = useState(false);
  const [adminData, setAdminData] = useState({});

  const getAdminStatistic = async () => {
    const { data } = await MainPageServices.getDataSuperAdmin();
    setAdminData(data.body);
  };

  useEffect(() => {
    getAdminStatistic();
  }, []);

  return (
    <div className="grid gap-5 gap-y-10 grid-cols-3 mt-6 w-full">
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            color="black"
          >
            <path
              fill-rule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clip-rule="evenodd"
            ></path>
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
          </svg>
        </div>
        <div className="text-end">
          <h6 className="text-sm text-gray-400">
            Bugungi jami ishlayotganlar soni
          </h6>
          <h2 className="text-3xl font-bold">{adminData.employeeCount}</h2>
        </div>
      </article>
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            color="skyblue"
          >
            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <h6 className="text-sm text-gray-400">Dam oluvchilar soni(otgul)</h6>
          <h2 className="text-3xl font-bold">{adminData.vacationCount}</h2>
        </div>
      </article>
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            color="red"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <h6 className="text-sm text-gray-400">Kasallar soni</h6>
          <h2 className="text-3xl font-bold">{adminData.sickCount}</h2>
        </div>
      </article>
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#616161"
            aria-hidden="true"
          >
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
          </svg>
        </div>
        <div className="text-end">
          <h6 className="text-sm text-gray-400">
            Ish haqi saqlanmagan holda (BS)
          </h6>
          <h2 className="text-3xl font-bold">{adminData.onTrainingCount}</h2>
        </div>
      </article>
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            color="green"
          >
            <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z"></path>
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-end">
          <h6 className="text-sm text-gray-400">Xizmat safarifda</h6>
          <h2 className="text-3xl font-bold">{adminData.tripCount}</h2>
        </div>
      </article>
      <article className="flex justify-between rounded-xl shadow-sm pb-5 bg-white p-4 border-2">
        <div className="relative ">
          <svg
            width={"3rem"}
            height={"3rem"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            color="brown"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"></path>
          </svg>
        </div>
        <div className="text-end">
          <h6
            className="text-sm line-clamp-1 text-gray-400 cursor-pointer"
            onClick={() => setTogle(!toggle)}
          >
            Malaka oshirishga (o'qishga ) {toggle ? "" : <br />} ketganlar soni
          </h6>
          <h2 className="text-4xl font-bold">{adminData.tripCount}</h2>
        </div>
      </article>
    </div>
  );
};

export default Hero;
