import { useState } from 'react';
import { FaHome, FaEye } from 'react-icons/fa';
import { SiEslgaming } from 'react-icons/si';
import { CiLogin } from 'react-icons/ci';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiConsoleController } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

function Navigation() {
  const [nav, setNav] = useState();
  const meniu = [
    { title: 'Home', icon: <FaHome />, page: 'homepage' },
    { title: 'Games', icon: <GiConsoleController />, page: 'games' },
    { title: 'Esports', icon: <SiEslgaming />, page: 'esports' },
    { title: 'Login', icon: <CiLogin />, page: 'login' },
  ];

  return (
    <>
      <nav className="flex w-full items-center justify-between bg-slate-800 p-6">
        <NavLink to={'homepage'}>
          {' '}
          <p className=" flex cursor-pointer text-3xl font-extrabold text-white">
            Gaming
          </p>
        </NavLink>
        <ul className="hidden gap-7 text-white md:flex">
          {meniu.map((item, index) => (
            <li
              key={index}
              className=" text-lg font-medium hover:text-yellow-300"
            >
              {' '}
              <NavLink to={item.page}>
                <p className=" cursor-pointer">{item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {
        // SIDE NAV-BAR
      }
      <button
        onClick={() => setNav(!nav)}
        type="button"
        aria-label="menu"
        className="absolute right-9 top-[1.9rem] md:hidden"
      >
        {nav ? (
          <AiOutlineClose size={25} color="white" className=" flex" />
        ) : (
          <AiOutlineMenu size={25} color="white" className="flex" />
        )}
      </button>
      <nav
        className={
          nav
            ? 'top-19 absolute left-0 z-[120] mb-20 h-3/4 w-[10rem] rounded-r-md bg-slate-800 text-white duration-500 ease-in-out md:hidden'
            : ' absolute left-[-100%] z-[120] h-3/4 w-full duration-500 ease-in-out md:hidden'
        }
      >
        {meniu.map((item, index) => (
          <li
            key={index}
            className=" mx-4 mt-[1.90rem] flex list-none items-center gap-3 text-lg font-medium hover:text-yellow-300"
          >
            <NavLink to={item.page} className="flex items-center gap-3">
              <span>{item.icon}</span>
              <p>{item.title}</p>{' '}
            </NavLink>
          </li>
        ))}
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navigation;
