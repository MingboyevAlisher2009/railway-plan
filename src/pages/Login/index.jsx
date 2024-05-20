import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import { setItem } from "../../helpers/storege";
import { toast } from "sonner";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = { phoneNumber: `+${phoneNumber}`, password };
    try {
      const { data } = await AuthService.login(userData);
      console.log(data);
      setItem("token", data.body);
      setItem("role", data.message);
      if (data.message === "ROLE_SUPER_ADMIN") {
        navigate("/super-admin/boshqaruv-paneli");
      } else if (data.message === "ROLE_LEADER") {
        navigate("/leader/boshqaruv-paneli");
      }
      toast.success('Successfully registered')
    } catch (error) {
      console.log(error);
      toast.error('User error');
    }
  };

  return (
    <div>
      <section className="m-8 flex justify-center gap-4">
        <div className=" lg:w-3/5 mt-24">
          <div className="text-center">
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">
              Kirish
            </h2>
            <p className="block antialiased font-sans text-blue-gray-900 text-lg font-normal">
              Telefon raqamingiz hamda parolingizni kiriting.
            </p>
          </div>
          <div className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
            <div className="mb-1 flex flex-col gap-6">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                Telefon raqam*
              </p>
              <div>
                <div className="relative w-full min-w-[200px] h-11">
                  <input
                    id="phoneNumber"
                    type="number"
                    placeholder="993332200"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900 !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
                </div>
                <p className="text-xs mt-1">
                  Raqam <span className="underline">998</span> dan boshlanishi
                  va davomidan 9 ta raqamdan iborat bo'lishi kerak!
                </p>
              </div>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                Parol*
              </p>
              <div>
                <div className="relative flex w-full">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-black text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none !absolute right-1 top-1 rounded z-50"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4 text-white"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="*******"
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"></label>
                  </div>
                </div>
                <p className="text-xs mt-1">
                  parol <span className="underline">4 dan</span> ko'p raqam va
                  xarflardan iborat bo'lishi kerak
                </p>
              </div>
            </div>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-black text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
              type="button"
              onClick={handleLogin}
            >
              Kirish
            </button>
            <a id="link" href="/auth/log-in"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
