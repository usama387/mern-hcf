import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  // for navigation
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  // token true means the user is logged in
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center text-base justify-between py-4 mb-5 border-b">
      <p
        className="font-bold text-2xl text-blue-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Pulseo
      </p>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-400 text-white rounded-lg p-2 text-center m-auto"
              : "bg-blue-100 text-gray-700 rounded-lg p-2 text-center hover:bg-blue-200 m-auto"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-400 text-white rounded-lg p-2 text-center m-auto"
              : "bg-blue-100 text-gray-700 rounded-lg p-2 text-center hover:bg-blue-200 m-auto"
          }
        >
          <li>Available Doctors</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-400 text-white rounded-lg p-2 text-center m-auto"
              : "bg-blue-100 text-gray-700 rounded-lg p-2 text-center hover:bg-blue-200 m-auto"
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-400 text-white rounded-lg p-2 text-center m-auto"
              : "bg-blue-100 text-gray-700 rounded-lg p-2 text-center hover:bg-blue-200 m-auto"
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="user"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="icon" />

            {/* Dropdown content */}
            <div className="absolute top-full right-0 mt-2 text-base font-medium bg-green-100 text-gray-700 hidden group-hover:block shadow-lg rounded-lg max-w-max">
              <div className="min-w-[150px] flex flex-col gap-2 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-green-600 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-green-600 cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Button onClick={() => navigate("/login")}>Create Account</Button>
        )}
        {/* Mobile Menu */}
        <img
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
          onClick={() => setShowMenu(true)}
        />
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0 "
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-blue-100 transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <p
              className="font-bold text-2xl text-blue-500 cursor-pointer w-36"
              onClick={() => navigate("/")}
            >
              Pulseo
            </p>{" "}
            <img
              src={assets.cross_icon}
              alt=""
              onClick={() => setShowMenu(false)}
              className="w-7"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to={"/"}>
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to={"/doctors"}
            >
              <p className="px-4 py-2 rounded inline-block">Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
