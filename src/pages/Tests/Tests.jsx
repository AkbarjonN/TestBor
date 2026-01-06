import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Tests = () => {
  const navigate = useNavigate();
  const testsLink = [
    { name: "Barchasi", to: "allTests" },
    { name: "Piima", to: "Piima" },
    { name: "OTM testlar", to: "universityTest" },
    { name: "Milliy sertifikat", to: "nationalCertificate" },
    { name: "Toshkent shahar hokimligi a'lochisi", to: "schoolTest" },
  ];
  const handleSelectChange = (e) => {
    const selectedRoute = e.target.value;
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };
  return (
    <div className="max-w-6xl mx-auto pt-36 px-3 pb-12 lg:px-0 ">
      <div className="my-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-xl font-medium md:text-2xl lg:text-4xl">Testlar</h2>
        <div className="hidden flex-wrap items-center gap-2.5 sm:flex">
          {testsLink.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                (isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-600 bg-white") +
                " hover:bg-green-600 rounded-full border border-gray-200 px-5 py-2 text:base lg:text-lg shadow-[0_1px_2px_0_#AFB6BB29] transition-all hover:text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="block w-full sm:hidden">
          <select
            onChange={handleSelectChange}
            className="native-select w-full rounded-xl border border-gray-200 bg-neutral px-4 py-2 outline-none"
            defaultValue=""
          >
            {testsLink.map((link) => (
              <option key={link.to} value={link.to}>
                {link.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Tests;
