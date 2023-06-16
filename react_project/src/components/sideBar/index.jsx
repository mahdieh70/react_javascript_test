import React from "react";

//router
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="bg-[#E8F4FF] h-[15vh] py-[10px] px-[15px] small:h-full  small:px-0 small:py-[30px] small:w-[150px] small:rounded-2xl medium:rounded-2xl large:rounded-2xl xLarge:rounded-2xl xxLarge:rounded-2xl medium:w-[220px] large:w-[300px] xLarge:w-[350px] xxLarge:w-[350px]">
        <ul className="flex items-center justify-between small:flex-col ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col text-center py-3 text-blue-700 small:flex-row-reverse items-center"
                  : "flex flex-col text-center py-3 small:flex-row-reverse items-center"
              }
            >
              <span className="text-[13px] medium:text-[14px] ">صفحه اصلی</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="table"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col text-center py-3 text-blue-700"
                  : "flex flex-col text-center py-3"
              }
            >
              <span className="text-[13px] medium:text-[14px] ">مشخصات پرسنل</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="searchBar"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col text-center py-3 text-blue-700"
                  : "flex flex-col text-center py-3"
              }
            >
              <span className="text-[13px] medium:text-[14px] ">جستجوی کشورها</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
