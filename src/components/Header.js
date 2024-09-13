import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo  from "../assets/logo.png";

export const Header = () => {
    const [ bold, setBold ] = useState(false);
    const isPath = useLocation();

    const [ dark, setDark ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false );
    
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(dark));
        if(dark){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);


  return (
    <nav className='border-b-2'>
        <div className='flex justify-center item-center mx-2 my-2 px-1 py-1 md:px-2 md:py-2'>
            <div className='flex-1'>
            <Link to='/' className=''>
                <img className='size-7 md:size-9 mt-1 dark:ring-2 ring-white' src={Logo} alt="logo" />
            </Link>
            </div>
            <Link to='/' onClick={() => setBold(!bold)} className={`${bold || isPath.pathname === "/" ? `bg-black text-white rounded-full dark:bg-white dark:text-black` : ""} px-2 py-2 text-gray-900 ${!bold && `dark:text-gray-100`} text-sm md:text-lg font-semibold`} >Home</Link>
            <span className='mx-5 px-1 py-1 md:px-2 md:py-2 rounded-2xl border border-gray-600 bg-orange-300'>
                <span className='text-sm mr-1 md:text-lg text-blue-700'>New</span>
                <span className='text-sm md:text-lg'>check out <i className="bi bi-arrow-right"></i></span>
                <Link to='/joke' className='underline text-sm md:text-lg text-blue-700'>Jokes</Link>
            </span>
            <span onClick={() => setDark(!dark)} className={`bi ${!dark ? `bi-brightness-low-fill` : `bi-moon-stars-fill text-white`} hover:cursor-pointer mt-1 md:mt-2 text-xl`}></span>
        </div>
    </nav>
  )
}
