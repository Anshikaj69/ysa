import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    Card,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronRightIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import ProcessCard from "./ProcessCard";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'

export function MenuComponent({ menuTitle, column1, column2, column1Title, column2Title }) {
    const [openMenu, setOpenMenu] = React.useState(false);


    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover className="shadow-2xl border-2 border-blue-900 hover:border-none max-h-[800px] overflow-y-clip">
            <MenuHandler>
                <button
                    variant="text"
                    className="flex items-center gap-0.5 2xl:text-sm md:text-xs font-semibold text-white md:text-[#253359] capitalize tracking-normal p-0 hover:bg-transparent poppins"
                >
                    {menuTitle}{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                    />
                </button>
            </MenuHandler>
            <MenuList className=" gap-3 overflow-visible hover:border-none">
               

                <MenuColumn title={column1Title} items={column1} setOpenMenu={setOpenMenu} />
                <MenuColumn title={column2Title} items={column2} setOpenMenu={setOpenMenu} />
               
            </MenuList>
        </Menu>
    );
}

const MenuColumn = ({ title, items, setOpenMenu }) => {
    const [openSubSector, setOpenSubSector] = React.useState(null);

    return (
        <ul className=" w-full flex flex-col hover:border-none md:py-5  p-2 gap-1.5">
            <h1 className="text-black text-sm md:text-base font-semibold poppins text-center">{title}</h1>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-0.5 md:gap-0">
            {items.map(({ title, link, icon, subSectors }) => (
                <MenuItemWithSubSectors
                    key={title} title={title} link={link} icon={icon} subSectors={subSectors}
                    setOpenMenu={setOpenMenu}
                    openSubSector={openSubSector}
                    setOpenSubSector={setOpenSubSector}
                />
            ))}
            </div>
        </ul>
    );
};

const MenuItemWithSubSectors = ({ title, link, icon, subSectors, openSubSector, setOpenSubSector, setOpenMenu }) => {
    const isOpen = openSubSector === title;

    const toggleSubSectors = () => {
        setOpenSubSector(isOpen ? null : title);
    };

    return subSectors && subSectors.length > 0 ? (
        <div className="w-full">
            <div className="flex justify-between items-center hover:bg-[#eaeef9] text-gray-600 hover:text-[#31319a] transition-colors  md:p-2 rounded-md cursor-pointer group" onClick={toggleSubSectors} >
                <div className="flex gap-2.5 items-center">
                    <div className="flex bg-[#eaeef9] group-hover:bg-[#ebf0fe] p-2 rounded">
                        {icon}
                    </div>
                    <p className="text-[10px] md:text-sm font-medium text-black group-hover:text-[#31319a] poppins">{title}</p>
                </div>
                <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-90" : ""}`} />
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        className="ml-8 mt-1"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {subSectors.map(({ title, link }) => (
                            <Link key={title} to={link} onClick={() => setOpenMenu(false)}>
                                <li className="text-xs md:text-sm font-medium text-gray-600 hover:text-[#31319a] transition-colors mb-1 flex gap-2 items-center">
                                    {title} <SquareArrowOutUpRightIcon size={12} />
                                </li>
                            </Link>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    ) : (
        <div >
            <Link to={link} onClick={() => setOpenMenu(false)} className="link-no-outline hover:bg-[#eaeef9] text-gray-600 hover:text-[#31319a] transition-colors flex items-center gap-2.5 md:p-2 rounded-md group border-none">
                <div className="flex bg-[#eaeef9] group-hover:bg-[#ebf0fe] p-2 h-fit rounded">
                    {icon}
                </div>
                <p className="text-[10px] md:text-sm font-medium text-black group-hover:text-[#31319a] poppins">{title}</p>
            </Link>
        </div>
    );
};
