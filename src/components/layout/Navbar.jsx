import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from './Container';
import { BadgeDollarSign, BatteryChargingIcon, BlocksIcon, BookOpen, BookOpenText, Bot, BoxesIcon, Briefcase, BrushIcon, ClipboardCheck, ClipboardIcon, CoffeeIcon, Cuboid, Edit, FileJson2Icon, FileMinusIcon, FileText, HeadsetIcon, HeartHandshakeIcon, HousePlus, KeyboardIcon, LucideAreaChart, MenuIcon, MessageCircleCode, NotebookPenIcon, PenTool, PhoneCallIcon, ScaleIcon, ScanEyeIcon, SearchCheck, ServerIcon, ShieldCheckIcon, ShoppingCartIcon, TargetIcon, TruckIcon, Users, UsersIcon, VideoIcon, WrenchIcon } from 'lucide-react';
import state from '../../store'
import { SimpleMenu } from './SimpleMenu';
import { LightbulbIcon } from "lucide-react";
import { MenuComponent } from './MenuComponent';

export const AdditionalServicesItems = [
  {
    title: "Web & App Development",
    description:
      "Custom Webiste and Mobile Apps",
    link: '/custom-services',
    icon: <FileJson2Icon size={18} />
  },
  {
    title: "Bespoke Marketing",
    description:
      "Tailored Marketing Strategy to Enhance Your Success",
    link: '/custom-services',
    icon: <NotebookPenIcon size={18} />
  },
  {
    title: "Blockchain",
    description:
      "Revolutionize Your Business with Blockchain",
    link: '/individual-roles/Blockchain',
    icon: <BlocksIcon size={18} />
  },
  {
    title: "3D Animation & Rendering",
    description:
      "Bring Your Vision to Life in Stunning 3D",
    link: '/individual-roles/3D Animations',
    icon: <BoxesIcon size={18} />
  },
  {
    title: "Trading Bot",
    description:
      "Trade Smarter with Our Advanced Bots",
    link: '/individual-roles/Bot Design',
    icon: <Bot size={18} />
  },
  {
    title: "Lead Generation & Sales",
    description: "Accelerate Growth with Targeted Leads and Proven Sales Strategies",
    link: '/individual-roles/Lead Generation',
    icon: <TargetIcon size={18} />
  }
]

export const sectors = [
  {
    title: 'Ecommerce & Marketplace',
    icon: <ShoppingCartIcon size={15} />,
    subSectors: [
      {
        title: 'MarketPlace',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/MarketPlace'
      },
      {
        title: 'E-Commerce',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/E-Commerce'
      },
      {
        title: 'Marketing Agency',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Marketing Agency'
      },
      {
        title: 'Social Media',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Social Media'
      }
    ]
  },
  {
    title: 'Insurance & Financial Services',
    icon: <ShieldCheckIcon size={15} />,
    subSectors: [
      {
        title: 'Financial Services',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Financial Services'
      },
      {
        title: 'Accounting Firm',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Accounting Firm'
      },
      {
        title: 'Health Plans',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Health Plans'
      },
    ]
  },
  {
    title: 'Digital Marketing & Design',
    icon: <BrushIcon size={15} />,
    subSectors: [
      {
        title: 'Interior Design/ Architecture',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Interior Design or Architecture'
      },
      {
        title: 'Marketing Agency',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Marketing Agency'
      },
      {
        title: 'MarketPlace',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/MarketPlace'
      },
      {
        title: 'Social Media',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Social Media'
      }
    ]
  },
  {
    title: 'Healthcare & HealthTech',
    icon: <HeartHandshakeIcon size={15} />,
    subSectors: [
      {
        title: 'Healthcare',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Healthcare'
      },
      {
        title: 'Health Plans',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Health Plans'
      },
    ]
  },
  {
    title: 'Hospitality',
    icon: <CoffeeIcon size={15} />,
    subSectors: [
      {
        title: 'Hospitality',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Hospitality'
      },
      {
        title: 'Airbnb',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Airbnb'
      }
    ]
  },
  {
    title: 'Real Estate and Retail',
    icon: <HousePlus size={15} />,
    subSectors: [
      {
        title: 'Real Estate',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Real Estate'
      },
      {
        title: 'C-store/ Gas Station',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/C-store or Gas Station'
      },
      {
        title: 'Airbnb',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Airbnb'
      }

    ]
  },
  {
    title: 'Maintenance Services',
    icon: <WrenchIcon size={15} />,
    subSectors: [
      {
        title: 'HVAC',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/HVAC'
      },
      {
        title: 'Plumbing',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Plumbing'
      },
      {
        title: 'Fencing & Roofing',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Fencing & Roofing'
      },
      {
        title: 'Pool Cleaning',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Pool Cleaning'
      }
    ]
  },
  {
    title: 'Transportation & Logistics',
    icon: <TruckIcon size={15} />,
    subSectors: [
      {
        title: 'Transportation & Logistics',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Transportation & Logistics'
      },
      {
        title: 'Automotive',
        icon: <ShieldCheckIcon size={15} />,
        link: '/sectors/Automotive'
      },
    ]
  },
  {
    title: 'Legal',
    icon: <ScaleIcon size={15} />,
    link: '/sectors/Legal'
  },
  {
    title: 'Energy & Utilities',
    icon: <BatteryChargingIcon size={15} />,
    link: '/sectors/Energy & Utilities'
  },
  {
    title: 'Education & Training',
    icon: <BookOpenText size={15} />,
    link: '/sectors/Education & Training'
  },
  {
    title: 'Back Office Processing',
    icon: <ClipboardCheck size={15} />,
    link: '/sectors/Back Office Processing'
  }
];  

export const roles = [
  {
    title: 'Customer Support',
    icon: <HeadsetIcon size={15} />,
    link: '/individual-roles/Customer Support'
  },
  {
    title: 'Executive Assistance',
    icon: <Briefcase size={15} />,
    link: '/individual-roles/Executive Assistance'
  },
  {
    title: 'Lead Generation & Sales',
    icon: <TargetIcon size={15} />,
    link: '/individual-roles/Lead Generation & Sales'
  },
  {
    title: 'Logistics & Operations',
    icon: <TruckIcon size={15} />,
    link: '/individual-roles/Logistics & Operations'
  },
  {
    title: 'Payroll & Bookkeeping',
    icon: <BadgeDollarSign size={15} />,
    link: '/individual-roles/Payroll'
  },
  {
    title: 'Data Entry',
    icon: <KeyboardIcon size={15} />,
    link: '/individual-roles/Data Entry'
  },
  {
    title: 'Design & Graphics',
    icon: <PenTool size={15} />,
    link: '/individual-roles/Design & Graphics'
  },
  {
    title: 'Content Writer',
    icon: <Edit size={15} />,
    link: '/individual-roles/Content Writer'
  },
  {
    title: 'Video Editor',
    icon: <VideoIcon size={15} />,
    link: '/individual-roles/Video Editor'
  },
  {
    title: 'Remote Monitoring',
    icon: <ScanEyeIcon size={15} />,
    link: '/individual-roles/Remote Monitoring'
  },
  {
    title: 'Medical Billing',
    icon: <FileText size={15} />,
    link: '/individual-roles/Medical Billing'
  },
  {
    title: 'Sourcing Agent',
    icon: <SearchCheck size={15} />,
    link: '/individual-roles/Sourcing Agent'
  },


];

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const AboutUsItems = [
    {
      title: "Why us",
      description:
        "Empower Your Business with Our Expert Support",
      link: '/about-us',
      icon: <LightbulbIcon size={22} />
    },
    {
      title: "Resources",
      description:
        "Explore Valuable Resources to Enhance Your Success",
      link: '/resources',
      icon: <BookOpenText size={22} />
    },
    {
      title: "Careers",
      description:
        "Become a Part of Our Dynamic Team",
      link: '/careers',
      icon: <LucideAreaChart size={22} />
    }
  ]

  const services = [
    {
      title: "Hire + Marketing Package",
      description:
        "Curated plan + 3 agents of your choice",
      link: '/sectors/marketplace#step1',
      icon: <TargetIcon size={18} />
    },
    {
      title: "Individual Plan",
      description:
        "Choose How Ever Many Agents Part Time/Full Time",
      link: '/individual-roles',
      icon: <UsersIcon size={20} />
    },
  ]

  return (
    <>
      <Container>
        <div className='flex justify-between items-center px-2 md:px-10 2xl:px-0 w-full'>
          {/* Logo */}
          <div className='box-border'>
            <Link to='/'><img src='/logo.svg' alt='YSA LOGO' className='flex items-center h-[60%] w-[60%] py-2 md:py-0 md:h-[90%] md:w-[90%]'></img></Link>
          </div>

          <div className='gap-12 items-center hidden md:flex'>
            {/* NavMenu */}
            <nav className='flex gap-7 items-center justify-center text-[#253359] 2xl:text-sm md:text-xs'>
              <SimpleMenu
                menuTitle='About us'
                menuItems={AboutUsItems}
              />
              <MenuComponent
                menuTitle='Outsourcing'
                column1={sectors}
                column2={roles}
                column1Title='Sectors'
                column2Title='Roles'
              />
              <SimpleMenu
                menuTitle='Services'
                menuItems={services}
              />
              <SimpleMenu
                menuTitle='Additional Services'
                menuItems={AdditionalServicesItems}
              />
              <Link to='/pricing' className=' font-semibold   '>Pricing</Link>
            </nav>
            <div>
              <span onClick={() => handleLinkClick('/sectors/marketplace#step1')}>
                <button className='hover:bg-[#e0efe3] bg-[#253359] font-normal rounded-3xl py-2 px-3 text-xs text-white 2xl:text-sm btn btn1'>Book a Call</button>
              </span>
            </div>
          </div>
          <div className="flex md:hidden font-semibold space-x-8 md:text-sm text-xs">
            {/* mobile menu */}
            <button onClick={handleNavToggle}>
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <div
        className={`absolute bg-[#181818] inset-0 z-40 w-screen h-screen flex flex-col p-2 transition-transform duration-500 transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex w-full h-24 px-5 text-white items-center justify-between">
          <Link to="/" className="text-2xl font-normal pr-1">
            Browse
          </Link>
          <button onClick={handleNavToggle} className="text-3xl">
            {isNavOpen ? "✕" : "☰"}
          </button>
        </div>
        <nav className='flex flex-col gap-7 items-center justify-center text-white 2xl:text-sm md:text-xs'>
          <MenuComponent
            menuTitle='Outsourcing'
            column1={sectors}
            column2={roles}
            column1Title='Sectors'
            column2Title='Roles'
          />
          <SimpleMenu
            menuTitle='About us'
            menuItems={AboutUsItems}
          />
          <SimpleMenu
            menuTitle='Services'
            menuItems={services}
          />
          <SimpleMenu
            menuTitle='Additional Services'
            menuItems={AdditionalServicesItems}
          />
          <Link to='/pricing' className=' font-semibold  '>Pricing</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;