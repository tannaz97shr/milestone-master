"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { LuGoal } from "react-icons/lu";
import { MdDashboard, MdSettings } from "react-icons/md";

import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import Backdrop from "../UI/Backdrop";
import iconM from "./icon-m.png";
import { IItem, IItemsGroup } from "./types";

const items: IItemsGroup = {
  menu: [
    {
      title: "Board",
      route: "/",
      icon: <MdDashboard />,
    },
    {
      title: "Goals",
      route: "/goals",
      icon: <LuGoal />,
    },
  ],
  account: [
    {
      title: "Profile",
      route: "/profile",
      icon: <CgProfile />,
    },
    {
      title: "Settings",
      route: "/settings",
      icon: <MdSettings />,
    },
  ],
};

const Sidebar = () => {
  const pathname: string = usePathname();
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  return (
    <>
      {isMenueOpen && <Backdrop onClick={() => setIsMenueOpen(false)} />}
      <div
        className={`z-10 transition-all flex p-4 
        bg-light-secondary dark:bg-dark-secondary shadow shadow-light-secondary dark:shadow-dark-secondary
    ${
      isMenueOpen
        ? "w-60 flex-col items-stretch justify-normal fixed lg:static h-[100vh]"
        : "w-full lg:w-60 flex-row lg:flex-col items-center lg:items-stretch justify-between lg:justify-normal"
    }
    `}
      >
        <div className="flex font-semibold lg:mb-4 text-lg items-center text-alpha dark:text-beta">
          <Image
            src={iconM}
            width={30}
            height={30}
            alt="icon m"
            className="mr-2"
          />{" "}
          Milestone Master
        </div>
        <button
          onClick={() => setIsMenueOpen(!isMenueOpen)}
          className={`${
            isMenueOpen ? "hidden" : "lg:hidden text-alpha dark:text-beta"
          }`}
        >
          <IoMdMenu size="2rem" />
        </button>
        <div className={`${isMenueOpen ? "" : "hidden lg:flex lg:flex-col"}`}>
          {Object.keys(items).map((key: keyof IItemsGroup) => {
            return (
              <div
                key={key}
                className="border-dark-secondary dark:border-light-secondary text-dark-primary dark:text-light-primary
                 border-b mb-4 py-2"
              >
                <div className="capitalize ">{key.toString()}</div>
                <ul className="pl-4 mt-2">
                  {items[key].map((item: IItem) => (
                    <li
                      className={`flex items-center my-2 ${
                        item.route !== "/"
                          ? pathname.includes(item.route) &&
                            "font-semibold text-beta"
                          : pathname === "/" && "font-semibold text-beta"
                      }`}
                      key={item.title}
                    >
                      {item.icon}
                      <Link className="ml-2" href={item.route}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Sidebar;
