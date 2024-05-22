import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/user";
import { Button, Input, Typography } from "@material-tailwind/react";
import { toast } from "sonner";
import errorImg from "../../assets/cross.png";

const Navbar = () => {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const getUserData = async () => {
    const { data } = await UserService.getMe();
    setData(data.body);
    setName(data.body.firstName);
    setLastName(data.body.lastName);
    setPhoneNumber(data.body.phoneNumber.slice(4));
    setPassword(data.body.password);
  };

  const editUserData = async () => {
    try {
      const userData = {
        id: data.id,
        firstName,
        lastName,
        phoneNumber: `+998${phoneNumber}`,
        password,
      };
      await UserService.editUser(userData);
      getUserData();
      setModalToggle(false);
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
    } catch (error) {
      console.log(error);
      toast(
        <div className="flex items-center gap-2">
          <img className="!w-7 !h-7" src={errorImg} alt="img not found" />
          <h2 className="text-lg">Malunot toliq kiritilmagan !</h2>
        </div>
      );
    }
  };

  const handleClik = () => {
    setModalToggle(!modalToggle);
    setToggle(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <nav className="w-[77%] bg-white z-50 flex justify-between fixed border-2 rounded-lg p-3">
        <div>
          <ol class="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
            <li class="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
              <Link to="/super-admin/boshqaruv-paneli">
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
        <div className="relative">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">{data.firstName}</span>
            <div onClick={() => setToggle(!toggle)}>
              <img
                src="https://cdn-icons-png.freepik.com/512/6596/6596121.png"
                alt="item-1"
                class="inline-block relative object-cover object-center !rounded-full w-12 h-12 cursor-pointer"
              />
            </div>
          </div>
          <div
            className={`absolute ${
              toggle ? "opacity-100" : "opacity-0 h-32"
            } top-12 w-40 h-44  -right-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center 
          px-4  bg-white`}
          >
            <div
              onClick={handleClik}
              className="w-full cursor-pointer hover:bg-gray-200 py-1
              rounded-md"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="mx-auto text-gray-400 text-[1.2rem]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
              </svg>
            </div>
            <div className="w-full cursor-pointer mt-3 p-2 hover:bg-gray-200 rounded-md">
              <h3 className="font-bold">Ism, familiya</h3>
              <p className="text-xs text-gray-400">
                {data.firstName} {data.lastName}
              </p>
            </div>
            <div className="w-full mt-3 cursor-pointer p-2 hover:bg-gray-200 rounded-md">
              <h3 className="font-bold">Telefon raqam</h3>
              <p className="text-xs text-gray-400">{data.phoneNumber}</p>
            </div>
          </div>
        </div>
      </nav>

      {modalToggle && (
        <div className="bg-black/50 flex items-center justify-center fixed w-full z-50 left-0 top-0 h-full">
          <div className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Tahrirlash
            </div>
            <div className="w-full flex flex-col items-center gap-5 justify-center py-5">
              <div className="w-96">
                <Input
                  value={firstName}
                  onChange={(e) => setName(e.target.value)}
                  label="Ism"
                />
              </div>
              <div className="w-96">
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  label="Familiya"
                />
              </div>
              <div className="relative flex w-full max-w-[24rem]">
                <Button
                  size="sm"
                  // color={"green"}
                  className="absolute !bg-[#8f8f8f] left-1 top-1 rounded"
                >
                  +998
                </Button>
                <div className="pl-16 w-full">
                  <Input
                    type="number"
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 absolute left-0 !text-sm text-gray-400 flex items-center gap-1 font-normal"
                  >
                    <span className="underline">9 ta</span> raqamdan iborat
                    bo'lishi kerak!
                  </Typography>
                </div>
              </div>
              <div className="w-96 mt-5">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  label="Password"
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 !text-sm text-gray-400 flex items-center gap-1 font-normal"
                >
                  <span className="underline">4 ta</span> raqamdan kam
                  bo'lmasligi kerak!
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                onClick={() => setModalToggle(false)}
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Orqaga
              </button>
              <Button
                onClick={editUserData}
                className="middle none center rounded-lg bg-gradient-to-tr from-[#212121] to-[#404040] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Tahrirlash
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
