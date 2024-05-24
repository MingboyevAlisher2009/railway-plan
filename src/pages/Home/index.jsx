import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="w-[100%] h-[78px]  pt-4 fixed z-50 bg-[#E4E5E6]">
        <div className="w-[1448px] mx-auto">
          <nav className="flex">
            <div className="logo flex">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                viewBox="0 0 172.000000 135.000000"
                preserveAspectRatio="xMidYMid meet"
                className="scale-125"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M683 1166 c-285 -69 -478 -368 -420 -651 48 -232 217 -403 447 -451
                  181 -38 369 21 505 160 163 165 207 395 119 615 -9 22 -20 41 -25 41 -5 0 -18
                  -18 -29 -39 -16 -31 -18 -46 -10 -66 6 -15 15 -57 21 -94 34 -222 -113 -454
                  -332 -522 -118 -37 -276 -21 -379 39 -195 112 -287 348 -220 563 65 210 282
                  357 496 335 79 -8 163 -37 220 -76 42 -28 48 -29 90 -19 24 6 44 13 44 15 0 3
                  -15 18 -32 34 -43 40 -179 105 -246 119 -69 14 -183 13 -249 -3z"
                  ></path>
                  <path
                    d="M661 918 c-112 -75 -208 -141 -212 -145 -8 -9 4 -370 14 -379 3 -3
                  98 56 211 132 l206 137 -1 141 c-1 78 -4 166 -8 196 l-6 55 -204 -137z"
                  ></path>
                  <path
                    d="M1161 974 c-91 -24 -167 -46 -169 -49 -2 -2 18 -15 45 -28 73 -37 89
                  -56 113 -129 12 -38 25 -68 28 -68 7 0 162 303 162 315 0 8 -3 7 -179 -41z"
                  ></path>
                  <path
                    d="M687 501 l-208 -138 166 -72 c92 -40 173 -70 180 -67 39 14 406 269
                  399 276 -10 9 -311 140 -322 140 -4 0 -101 -62 -215 -139z"
                  ></path>
                </g>
              </svg>
              <a
                href="#"
                className="text-[#2899F3] text-[16px] font-bold pt-3 pl-2"
              >
                Railway Plan
              </a>
            </div>
            <ol className="flex ml-56 gap-20 font-bold pt-3">
              <li>BOSH SAHIFA</li>
              <li>TARIXI</li>
              <li>VAZIFA</li>
              <li>RAHBARIYAT</li>
              <li>BOGLANISH</li>
            </ol>
            <Link to={"/login"}>
              <button className="ml-52 bg-black text-white w-20 h-9 mt-1 font-bold text-[13px] rounded-[6px]">
                KIRISH
              </button>
            </Link>
          </nav>
        </div>
      </header>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img
            className="w-[100%] h-[100vh]"
            src="https://pch14.uz/src/landing_page/images/carousel1.jpg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="w-[100%] h-[100vh]"
            src="https://pch14.uz/src/landing_page/images/carousel2.jpg"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="w-[100%] h-[100vh]"
            src="https://pch14.uz/src/landing_page/images/carousel3.png"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>
      <div className="w-[1104px] mx-auto ">
        <h2 className="text-[#FD972E] text-center mt-24 text-[28px]">
          Biz haqimizda
        </h2>
        <p className="text-center text-[20px] text-[#858585] mt-2">
          Korxona tarixi va korxona haqida ma`lumotlar bilan tanishing
        </p>
        Jahonsher, [22.05.2024 10:51]
        <div className="py-12 md:py-20 ">
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    >
                      {" "}
                    </path>
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    ></path>
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Korxona joylashgan manzil
              </h4>
              <p className="text-gray-600 text-center">
                Qashqadaryo viloyati, Qarshi shahri, Shayhali Qo`rg`onchasi,
                27-uy.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    ></circle>
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    ></path>
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Korxona tashkil etilgan yil
              </h4>
              <p className="text-gray-600 text-center">
                26.06.2009 yil tashkil qilingan.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Korxona joylashgan yer maydoni
              </h4>
              <p className="text-gray-600 text-center">
                Korxona 9 333,71 kv.metr maydonni egallagan.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    Jahonsher, [22.05.2024 10:51]
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    ></path>
                    <circle
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    ></circle>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Korxonaning umumiy ishchilar soni
              </h4>
              <p className="text-gray-600 text-center">
                Korxonada 626 ta ishchi o`z faoliyatini olib bormoqda.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    ></path>
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Korxonaning muhandis-texnik hodimlar soni
              </h4>
              <p className="text-gray-600 text-center">
                32 tani tashkil etadi.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white h-full rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  ></rect>
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    ></path>
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    ></path>
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    ></path>
                  </g>
                </g>
              </svg>

              <h4 className="text-xl text-center font-bold leading-snug tracking-tight mb-1">
                Ma`muriy hodimlar
              </h4>
              <p className="text-gray-600 text-center">
                8 kishini tashkil etadi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[400px] bg-black mt-[-380px]"></div>
      <div className="">
        <h2 className="text-[#FD972E] text-center mt-24 text-[28px]">
          Xizmatlari, Vazifalari
        </h2>
        <p className="text-center text-[20px] text-[#858585] mt-2">
          Bizning xaizmatlarimiz va vazifalarimiz bilan tanishishingiz mumkin
        </p>
        <div className="flex w-[1104px] mx-auto">
          <div>
            <h4 className=" text-2xl text-start mt-16 font-bold">
              Korxonaning asosiy ish faoliyati:
            </h4>
            <p className="mt-4 w-[470px] text-[18px] text-[#858585]">
              {" "}
              Qashqadaryo temir yo`l ta`mirlash korxonasi Qarshi Mintaqaviy
              temir yo`l uzeli shu`ba korxonasining tarkibiy bo`linmasi
              hisoblanadi va o`z xo`jalik faoliyati natijalari uchun, o`zaro
              tuzilgan shartnomalar asosida olinganc majburiyatlar bo`yicha
              iste`molchilar oldida, davlat budjeti, bank, korxona jamoasi
              oldida qonunchilikka asosan mustaqil ravishda to`laligicha
              javobgardir.
            </p>
            Jahonsher, [22.05.2024 10:51]
            <div className="flex w-[570px] h-[150px] border-gray shadow-2xl mt-4 bg-slate-100">
              <p className="w-[440px] p-5 pt-[45px]  text-[#858585] text-[18px]">
                O`ziga biriktirilgan temir yo`llarning texnik sozligini va
                ulardan samarali foydalanishni ta`minlash.
              </p>
              <svg
                className="w-3 h-3 fill-current ml-8 mt-[90px]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"></path>
              </svg>
            </div>
            <div className="flex w-[570px] h-[150px] border-gray shadow-2xl mt-4 bg-slate-100">
              <p className="w-[440px] p-5 pt-[25px]  text-[#858585] text-[18px]">
                Poyezdlar harakat havfsizligini ta`minlash harakat havfsizligi
                buzilishi hollari oldini olish, bu ishda halokatlar, nuqsonlar
                va nosozliklarga yo‘l qo‘ymaslik choralarini ko‘rish
              </p>
              <svg
                className="w-3 h-3 fill-current ml-8 mt-[80px]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                  fillRule="nonzero"
                ></path>
              </svg>
            </div>
            <div className="flex w-[570px] h-[150px] border-gray shadow-2xl mt-4 bg-slate-100">
              <p className="w-[440px] p-5 pt-[25px]  text-[#858585] text-[18px]">
                Ishlab chiqarish samaradorligini va rentabelligini oshirish,
                yog`ilg`i moylash mahsulotlari, elektr energiyasi va boshqa
                materiallardan tejamkorlik bilan foydalanish choralarini ko‘rish
              </p>
              <svg
                className="w-3 h-3 fill-current ml-8 mt-[80px]"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                  fill="#191919"
                  fillRule="nonzero"
                ></path>
              </svg>
            </div>
          </div>
          <div></div>
        </div>

        <div className="container mt-36 mx-auto px-5 sm:px-0">
          <h1 className="text-[#FD972E] text-center text-[2.3rem] md:text-[3rem] font-bold tracking-wide mb-10">
            Rahbariyat
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[1320px] mx-auto gap-10">
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="https://pch14.uz/src/landing_page/images/rahbariyat/boshliq.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Korxona boshlig`i
                </h6>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Shodmanov B. B
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog`lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Chorshanba 15.00-16.00
                </p>
              </div>
            </div>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="  https://pch14.uz/src/landing_page/images/rahbariyat/avatar.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                Jahonsher, [22.05.2024 10:51]
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Bosh muxandis
                </h6>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Rajabov N. T
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog‘lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Dushanba 17:00-18:00
                </p>
              </div>
            </div>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="https://pch14.uz/src/landing_page/images/rahbariyat/avatar.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Boshliq o`rinbosari
                </h6>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Toxirov A
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog`lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Seshanba 17:00 – 19:00
                </p>
              </div>
            </div>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="https://pch14.uz/src/landing_page/images/rahbariyat/avatar.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Boshliq o`rinbosari
                </h6>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Xidirnazarov G
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog`lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Juma 18:00 – 20:00
                </p>
              </div>
            </div>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="https://pch14.uz/src/landing_page/images/rahbariyat/bosh-hisobchi.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Bosh hisobchi
                </h6>
                Jahonsher, [22.05.2024 10:51]
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  J`rayev N
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog‘lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Juma 16:00 – 18:00
                </p>
              </div>
            </div>
            <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 m-0 w-2/5 h-60 shrink-0 rounded-r-none">
                <img
                  src="https://pch14.uz/src/landing_page/images/rahbariyat/bolim-boshligi.jpg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700 mb-2 uppercase">
                  Hodimlar bo`limi boshlig`i
                </h6>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  Yo`ldoshev A
                </h5>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  Bog‘lanish uchun telefon: 75 227 01 25
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 font-normal">
                  E-mail: pch14@gmail.com
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mb-4 font-normal">
                  Qabul kunlari: Dushanba 18:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container w-[1320px] mx-auto text-center">
          <h1 className="block antialiased tracking-normal mt-36 font-sans text-[48px] font-semibold leading-tight text-blue-gray-900 mb-16 !text-3xl lg:!text-5xl">
            Bog`lanish uchun
          </h1>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9658.978393009786!2d65.77603566763352!3d38.856112223647436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea70e02b0999b%3A0x2c13ab85fac89ee9!2sQarshi%20mintaqaviy%20temir%20yo'l%20uzeli%20unitar%20korxonasi!5e0!3m2!1suz!2s!4v1714800901700!5m2!1suz!2s"
              height="450"
              className="rounded w-full"
              loading="lazy"
              refererpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="grid grid-cols-1 gap-y-7">
              <div className="flex justify-start items-start gap-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="blue"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"></path>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                  </svg>
                </div>
                <div className="text-start">
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                    Manzil
                  </h4>
                  <h6 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium">
                    Qashqadaryo viloyati, Qarshi shahri, Shayxali qo‘rg‘onchasi,
                    27-uy.
                  </h6>
                </div>
              </div>
              <div className="flex justify-start items-start gap-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="blue"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    Jahonsher, [22.05.2024 10:51]
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                  </svg>
                </div>
                <div className="text-start">
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                    Ishonch telefoni
                  </h4>
                  <h6 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium">
                    75 227 01 25
                  </h6>
                </div>
              </div>
              <div className="flex justify-start items-start gap-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="blue"
                    className="bi bi-calendar2-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"></path>
                  </svg>
                </div>
                <div className="text-start">
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                    Ish kunlari
                  </h4>
                  <h6 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium">
                    Dushanba – Juma. Dam olish kunlari: Shanba va yakshanba
                  </h6>
                </div>
              </div>
              <div className="flex justify-start items-start gap-10">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    fill="blue"
                    className="bi bi-stopwatch"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"></path>
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"></path>
                  </svg>
                </div>
                <div className="text-start">
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                    Ish vaqti
                  </h4>
                  <h6 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit opacity-70 font-medium">
                    Ish soati: 09:00 dan 20:00 gacha
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-[#101C30] w-[100%] h-[144px] mt-20">
          <div className="container w-[1320px] mx-auto pt-20">
            <p className="text-[#696B6D] text-[18px]">
              © 2024 <span className="text-[#1C7CD0]">IT City Academy</span> All
              rights reserved.
            </p>
            Jahonsher, [22.05.2024 10:51]
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Twitter"
                  href="/home"
                >
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
                    type="button"
                    // style="position: relative; overflow: hidden;"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <i className="fab fa-telegram text-lg"></i>
                    </span>
                  </button>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Github"
                  href="/home"
                >
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
                    type="button"
                    // style="position: relative; overflow: hidden;"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <i className="fab fa-instagram text-lg"></i>
                    </span>
                  </button>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Facebook"
                  href="/home"
                >
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
                    type="button"
                    // style="position: relative; overflow: hidden;"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <i className="fab fa-youtube text-lg"></i>
                    </span>
                  </button>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="Facebook"
                  href="/home"
                >
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
                    type="button"
                    // style="position: relative; overflow: hidden;"
                  >
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      Jahonsher, [22.05.2024 10:51]
                      <i className="fab fa-facebook text-lg"></i>
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
