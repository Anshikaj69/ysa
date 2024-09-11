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
import {AnimatePresence, motion} from 'framer-motion'

export function MenuComponent({ menuTitle, column1, column2, column1Title, column2Title }) {
    const [openMenu, setOpenMenu] = React.useState(false);


    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover  className="shadow-2xl border-2 border-blue-900 hover:border-none max-h-[800px] overflow-y-clip">
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
            <MenuList className="md:w-[70rem] grid-cols-12 gap-3 overflow-visible grid hover:border-none">
                <Card
                    shadow={false}
                    className="hidden col-span-4 md:flex h-full w-full items-center justify-center rounded bg-[#f0f2f8] hover:border-0 border-0 p-4"
                >
                    <ProcessCard />
                </Card>

                <MenuColumn title={column1Title} items={column1} setOpenMenu={setOpenMenu}/>
                <MenuColumn title={column2Title} items={column2} setOpenMenu={setOpenMenu}/>
            </MenuList>
        </Menu>
    );
}

const MenuColumn = ({ title, items, setOpenMenu }) => {
    const [openSubSector, setOpenSubSector] = React.useState(null);

    return (
        <ul className="col-span-6 md:col-span-4 flex w-full flex-col hover:border-none md:py-5 md:pl-5 md:pr-2 p-2 gap-1.5">
            <h1 className="text-black text-sm md:text-base font-semibold poppins">{title}</h1>
            {items.map(({ title, link, icon, subSectors }) => (
                <MenuItemWithSubSectors 
                key={title} title={title} link={link} icon={icon} subSectors={subSectors} 
                setOpenMenu={setOpenMenu}
                openSubSector={openSubSector} 
                setOpenSubSector={setOpenSubSector}
                />
            ))}
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
            <div className="flex justify-between items-center hover:bg-[#eaeef9] text-gray-600 hover:text-[#31319a] transition-colors p-1.5 rounded-md cursor-pointer group" onClick={toggleSubSectors} >
                <div className="flex gap-2.5 items-center">
                    <div className="flex bg-[#eaeef9] group-hover:bg-[#ebf0fe] p-1 rounded">
                    {icon}
                    </div>
                    <p className="text-xs md:text-sm font-medium text-black group-hover:text-[#31319a] poppins">{title}</p>
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
        <Link to={link} onClick={() => setOpenMenu(false)}>
            <div className="hover:bg-[#eaeef9] text-gray-600 hover:text-[#31319a] transition-colors flex gap-2.5 p-1.5 rounded-md group">
            <div className="flex bg-[#eaeef9] group-hover:bg-[#ebf0fe] p-1 rounded">
                    {icon}
                    </div>
                <p className="text-xs md:text-sm font-medium text-black group-hover:text-[#31319a] poppins">{title}</p>
            </div>
        </Link>
    );
};
