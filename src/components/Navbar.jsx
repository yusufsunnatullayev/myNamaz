import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 container">
      <Link className="flex items-center justify-center gap-2" to={"/"}>
        <img src="./src/assets/logo.svg" alt="" />
        <h1 className="text-xl font-normal logo-text">MyNamaz</h1>
      </Link>
      <div className="flex items-center justify-center gap-7">
        <Link className="text-sm font-normal" to={"/weather"}>
          Ob-havo
        </Link>
        <Link className="text-sm font-normal" to={"/tasbeh"}>
          Tasbeh
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
