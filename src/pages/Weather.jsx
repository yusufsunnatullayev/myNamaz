import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const Api_Key = "75ced55da7174c4764fbb1897da6af5b";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=${Api_Key}`;
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        const data = res.data;
        setWeather(data.main);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[669px] h-full mx-auto flex flex-col items-center gap-6 py-12">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-semibold">Ob-havo ma’lumotlari</h1>
        <p className="text-xl font-normal text-gray">Yakshanba - 21 mart</p>
      </div>
      <div className="w-full flex items-center justify-between rounded-md bg-white bg-opacity-[0.06] py-5 px-8">
        <div className=" flex flex-col ">
          <span className="text-[100px] font-normal">{weather?.temp}</span>
          <p className="text-xl font-normal text-gray">O‘zbekiston, Toshkent</p>
        </div>
        <img src="./src/assets/main-weather.png" alt="" />
      </div>
      <div className="w-full h-[226px] flex gap-10 rounded-md bg-white bg-opacity-[0.06] p-7">
        {/* 1 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather1.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Du</span>
          </div>
        </div>
        {/* 2 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather2.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Se</span>
          </div>
        </div>
        {/* 3 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather3.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Cho</span>
          </div>
        </div>
        {/* 4 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather4.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Pa</span>
          </div>
        </div>
        {/* 5 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather5.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Ju</span>
          </div>
        </div>
        {/* 6 🚩 */}
        <div className="relative flex flex-col items-center gap-3">
          <img src="./src/assets/weather6.png" alt="" />
          <div className="absolute bottom-5 flex flex-col items-center ">
            <span className="text-[40px] font-normal">23°</span>
            <span className="text-xl font-normal text-gray">Sha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
