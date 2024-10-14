import React, { useState } from "react";

const Tasbeh = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[437px] h-full flex flex-col gap-5 items-center py-12 mx-auto">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl font-semibold">Tasbeh</h1>
        <div className="flex flex-col gap-1 items-center">
          <span className="font-normal text-xl">Subhanallah</span>
          <span className="font-normal text-sm opacity-[0.08]">
            Alhamdulillah
          </span>
          <span className="font-normal text-[10px] opacity-[0.04]">
            Allohu akbar
          </span>
        </div>
      </div>
      <div className="w-full bg-white bg-opacity-[0.06] rounded-md flex items-center justify-end  px-9">
        <h1 className="font-normal text-[90px] text-green">{count}</h1>
      </div>
      <div className="flex items-center justify-center gap-[10px] self-start">
        <button
          onClick={() => setCount(0)}
          className="w-[23px] h-[23px] rounded-full bg-green hover:opacity-90 duration-150"
        ></button>
        <span className="font-normal text-sm">Tozalash</span>
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="text-xl font-normal bg-green rounded-md py-3 px-12 hover:opacity-90 duration-150"
      >
        Sanash
      </button>
    </div>
  );
};

export default Tasbeh;
