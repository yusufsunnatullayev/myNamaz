import axios from "axios";
import React, { useEffect, useState } from "react";

const MyNamaz = () => {
  const API_KEY = "bba7ab9bd035d049765305fef6073578";
  const API = `https://muslimsalat.com/tashkent.json?key=${API_KEY}`;
  const [prayTime, setPrayTime] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        const data = res.data;
        console.log(data);
        setPrayTime(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full p-12 flex flex-col items-center gap-12">
      {/* 🚩 */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-3xl">
          Toshkent shahri uchun namoz vaqti
        </h1>
        <p className="font-normal text-xl text-green">{prayTime?.date_for}</p>
      </div>
      {/* 🚩 */}
      <div className="flex flex-col items-center gap-4 w-[344px]">
        <span className="text-gray text-base font-normal">Namoz vaqti</span>
        <div className="h-[1px] bg-lightBlue w-full"></div>
        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col  items-center">
            <span className="text-[110px] font-[275]">02</span>
            <span className="font-normal text-base text-gray">Soat</span>
          </div>
          <div className="w-[1px] bg-lightBlue h-[156px]"></div>
          <div className="flex flex-col items-center">
            <span className="text-[110px] font-[275]">55</span>
            <span className="font-normal text-base text-gray">Daqiqa</span>
          </div>
        </div>
      </div>
      {/* 🚩 */}
      <div className="w-[1199px] flex flex-col border border-lightBlue">
        <div className="flex items-center justify-center border border-lightBlue p-5">
          <p className="font-normal text-base">8 shabon, 1443</p>
        </div>
        <div className="w-full flex">
          {/* 1 🚩 */}
          <div className="h-[204px] relative flex flex-col items-center gap-3 py-7 px-20 border border-lightBlue">
            <img src="./src/assets/pray1.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Bomdod</span>
              <span className="text-xl font-[275]">{prayTime?.fajr}</span>
            </div>
          </div>
          {/* 2 🚩 */}
          <div className="h-[204px]  relative flex flex-col items-center gap-3 py-7  px-20  border border-lightBlue">
            <img src="./src/assets/pray2.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Quyosh</span>
              <span className="text-xl font-[275]">{prayTime?.shurooq}</span>
            </div>
          </div>
          {/* 3 🚩 */}
          <div className="h-[204px]  relative flex flex-col items-center gap-3 py-7  px-20  border border-lightBlue">
            <img src="./src/assets/pray3.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Peshin</span>
              <span className="text-xl font-[275]">{prayTime?.dhuhr}</span>
            </div>
          </div>
          {/* 4 🚩 */}
          <div className="h-[204px] relative flex flex-col items-center gap-3 py-7 px-20 border border-lightBlue">
            <img src="./src/assets/pray4.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Asr</span>
              <span className="text-xl font-[275]">{prayTime?.asr}</span>
            </div>
          </div>
          {/* 5 🚩 */}
          <div className="h-[204px] relative flex flex-col items-center gap-3 py-7 px-20 border border-lightBlue">
            <img src="./src/assets/pray5.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Shom</span>
              <span className="text-xl font-[275]">{prayTime?.maghrib}</span>
            </div>
          </div>
          {/* 6 🚩 */}
          <div className="h-[204px] relative flex flex-col items-center gap-3 py-7 px-20 border border-lightBlue">
            <img src="./src/assets/pray6.png" alt="" />
            <div className="absolute bottom-9 flex flex-col gap-3 items-center">
              <span className="font-normal text-base">Xufton</span>
              <span className="text-xl font-[275]">{prayTime?.isha}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNamaz;
