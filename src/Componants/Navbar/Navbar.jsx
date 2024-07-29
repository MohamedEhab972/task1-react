import React from "react";
import "flowbite";
import { NavbarLink } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="text-white z-50 fixed top-0 w-full p-4 bg-[#2c3e50] ">
        <div className="flex flex-wrap items-center justify-evenly md:justify-between p-3">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl md:text-4xl font-extrabold whitespace-nowrap dark:text-white">
              START FRAMEWORK
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border border-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to=""
                  className="block font-bold text-md py-2 px-3 text-white rounded-md"
                  aria-current="page"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portofolio"
                  className="block font-bold text-md py-2 px-3 text-white rounded-md "
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="block font-bold text-md py-2 px-3 text-white rounded-md "
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
