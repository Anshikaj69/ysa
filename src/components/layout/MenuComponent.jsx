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
import { Link } from "react-router-dom";

export function MenuComponent({ menuTitle, column1, column2, column1Title, column2Title }) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover className='shadow-2xl border-2 border-blue-900 hover:border-none'>
            <MenuHandler>
                <button
                    variant="text"
                    className="flex items-center gap-0.5 2xl:text-sm md:text-xs font-semibold text-[#253359] capitalize tracking-normal p-0 hover:bg-transparent"
                >
                    {menuTitle}{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </MenuHandler>
            <MenuList className="hidden w-[70rem] grid-cols-12 gap-3 overflow-visible lg:grid hover:border-none">

                <ul className={`${column2.length > 12 ? 'col-span-3' : 'col-span-4'} flex w-full flex-col hover:border-none py-5 pl-5 pr-2 gap-1.5`}>
                    <h1 className="text-black text-base font-semibold">{column1Title}</h1>
                    {column1.map(({ title, link, icon }) => (
                        <Link key={title} to={link}>
                            <div className="hover:bg-[#eaeef9] text-gray-600 hover:text-[#182548] transition-colors flex gap-2.5 p-1.5 rounded-md">
                                {icon}
                                <div className="flex flex-col">
                                    <p className=" flex gap-1 items-center text-sm font-medium text-black">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </ul>

                <ul className={`${column2.length > 12 ? 'col-span-3' : 'col-span-4'} flex w-full flex-col hover:border-none py-5 pl-5 pr-2 gap-1.5`}>
                    <h1 className="text-black text-base font-semibold">{column2Title}</h1>
                    {column2.map(({ title, link, icon }) => (
                        <Link key={title} to={link}>
                            <div className="hover:bg-[#eaeef9] text-gray-600 hover:text-[#182548] transition-colors flex gap-2.5 p-1.5 rounded-md">
                                {icon}
                                <div className="flex flex-col">
                                    <p className=" flex gap-1 items-center text-sm font-medium text-black">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </ul>

                <Card
                    shadow={false}
                    className="col-span-4 flex h-full w-full items-center justify-center rounded  bg-[#d6dce9] hover:border-0 border-0 p-4"
                >
                    <ProcessCard />
                </Card>
            </MenuList>
        </Menu>
    );
}
