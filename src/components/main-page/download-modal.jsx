import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { toast } from "sonner";
import errorImg from "../../assets/cross.png";
import DownloadService from "../../services/download";

const DownloadModal = ({ toggle, setToggle }) => {
  const [date, setDate] = useState("");
  const [error, setEror] = useState(false);

  const handleClick = async () => {
    if (date.length === 0) {
      setEror(true);
    } else {
      setEror(false);
    }
    try {
      await DownloadService.download(date);
      toast(
        <div className="flex gap-2 text-lg">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/ok--v1.png"
            alt="ok--v1"
          />
          <h2>User updated succsefuly</h2>
        </div>
      );
      setToggle(false);
    } catch (error) {
      console.log(error);
      toast(
        <div className="flex items-center gap-2">
          <img className="!w-7 !h-7" src={errorImg} alt="img not found" />
          <h2 className="text-lg">{error.response.data.error} !</h2>
        </div>
      );
    }
  };

  return (
    <div>
      {toggle && (
        <div className="fixed flex justify-center items-center z-50 w-full h-full top-0 left-0 bg-black/60 backdrop-blur-sm ">
          <div className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] h-60 rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Excel fayl yuklash
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              <Input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                label="Vaqtni tanlang"
              />

              <Typography className={error ? "opacity-100" : "opacity-0"}>
                <h3 className="text-red-500 text-lg font-bold">
                  Ma'lumot kiriting !!!
                </h3>
              </Typography>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                onClick={() => setToggle(false)}
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Orqaga
              </button>
              <Button
                onClick={handleClick}
                className="middle none center rounded-lg bg-black py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Yuklash
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadModal;
