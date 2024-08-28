import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, SquareArrowOutUpRight } from "lucide-react";
import ProcessCard from "./ProcessCard";
import { useNavigate, Link } from "react-router-dom";

export function SimpleMenu({ menuTitle, menuItems }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-0.5 2xl:text-sm md:text-xs font-semibold text-white md:text-[#253359] capitalize tracking-normal p-0 hover:bg-transparent"
        >
          {menuTitle}{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className=" md:w-[42rem] grid-cols-12 gap-3 overflow-visible md:grid shadow-2xl">

        <ul className="col-span-6 flex w-full flex-col hover:border-none p-1 gap-1.5">
          {menuItems.map(({ title, description, link ,icon }) => (
            <Link key={title} to={link}>
              <MenuItem className="hover:bg-gray-200 text-gray-600 hover:text-[#4D4DFF] transition-colors flex gap-2.5 items-start">
                {icon}
              <div className="flex flex-col text-black hover:text-[#4D4DFF]">
                <Typography variant="h6" className=" flex gap-1 items-center text-sm ">
                 {title} <SquareArrowOutUpRight size={14} strokeWidth={2}/>
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
                </div>
              </MenuItem>
            </Link>
          ))}
        </ul>

        <Card
          shadow={false}
          className="hidden col-span-6 md:flex h-full w-full items-center justify-center rounded p-4 bg-[#d8dce5] hover:border-0 border-0"
        >
          <ProcessCard />
        </Card>
      </MenuList>
    </Menu>
  );
}
