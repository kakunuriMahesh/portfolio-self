import React from "react";

const Header = () => {
  return (
    <div className=" z-50 fixed w-full flex justify-between items-center bg-gray-300">
      <div className="ml-2">
        <a className="text-xl cursor-pointer no-underline" href="#home">
          <h4 className="border-4 border-double border-black p-2 text-black m-1 bg-white rounded-lg">
            K<span className="font-bold">M</span>
          </h4>
        </a>
      </div>
      <ul className="flex list-none p-0 m-0">
        <li className="m-2">
          <a className="no-underline text-black text-lg hover:text-red-500" href="#home">
            Home
          </a>
        </li>
        <li className="m-2">
          <a className="no-underline text-black text-lg hover:text-red-500" href="#about">
            About
          </a>
        </li>
        <li className="m-2">
          <a className="no-underline text-black text-lg hover:text-red-500" href="#projects">
            Projects
          </a>
        </li>
        <li className="m-2">
          <a className="no-underline text-black text-lg hover:text-red-500" href="#services">
            Services
          </a>
        </li>
        <li className="m-2">
          <a className="no-underline text-black text-lg hover:text-red-500" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

