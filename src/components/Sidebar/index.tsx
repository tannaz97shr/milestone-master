import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LuGoal } from "react-icons/lu";
import { MdDashboard, MdSettings } from "react-icons/md";

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
  return (
    <div
      className="flex flex-col p-4
    bg-zinc-800 w-60 shadow-lg shadow-zinc-500"
    >
      <div className="flex font-semibold mb-4 text-lg items-center text-purple-400">
        <Image
          src={iconM}
          width={40}
          height={40}
          alt="Picture of the author"
          className="mr-2"
        />{" "}
        Milestone Master
      </div>
      {Object.keys(items).map((key: keyof IItemsGroup) => {
        return (
          <div
            key={key}
            className="border-slate-500 text-gray-300 border-b mb-4 py-2"
          >
            <div className="capitalize ">{key.toString()}</div>
            <ul className="pl-4 mt-2">
              {items[key].map((item: IItem) => (
                <li className="flex items-center" key={item.title}>
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
  );
};

export default Sidebar;
