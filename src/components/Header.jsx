import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Header = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Testlar", to: "/tests" },
    { name: "O‘rganish", to: "/study" },
    { name: "Musobaqalar", to: "/competition" },
  ];
  return (
    <div className=" bg-white p-5 fixed w-full z-10 border-b border-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <Bars3Icon className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        <div className="flex items-center space-x-18">
          <Link to="/" className="text-3xl font-bold">
            TestBor<span className="text-green-600">.</span>
          </Link>
          <div className="hidden lg:flex space-x-10 text-lg text-black font-normal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  (isActive ? "text-green-600" : "text-black") +
                  " hover:text-green-600"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden lg:flex bg-green-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-200 transition">
            Testbor Plus
          </button>

          <button className="text-gray-600 hover:text-black">
            <BellIcon className="w-8 h-8 text-gray-500" />
          </button>

          <select className="hidden lg:flex border-0 px-2 py-1 text-gray-700">
            <option>UZ</option>
            <option>RU</option>
            <option>EN</option>
          </select>
          {/* Login button */}
          <Link
            to="/login"
            className="border-0 rounded-2xl bg-[rgb(236,235,227)] px-5 p-2.5 hover:brightness-90 transition"
          >
            Kirish
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden p-5 space-y-6 fixed top-0 left-0 w-full h-full bg-white
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between">
          <Link
            to="/"
            className="text-4xl font-bold"
            onClick={() => setOpen(!open)}
          >
            TestBor<span className="text-green-600">.</span>
          </Link>
          <button onClick={() => setOpen(!open)}>
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        <button className=" w-35 bg-green-400 text-white font-semibold  py-2 rounded-full hover:bg-green-200 transition">
          Testbor Plus
        </button>
        <div className="text-2xl flex flex-col space-y-6 font-semibold ">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                (isActive ? "text-green-600" : "text-black") +
                " hover:text-green-600"
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <select className=" border-0 px-2 py-1 text-gray-700 font-semibold">
          <option>UZ</option>
          <option>RU</option>
          <option>EN</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
