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
    <nav className='bg-white  dark:bg-bgone border-b-2 dark:border-none'>
        <div className='max-w-screen-xl flex flex-wrap justify-center item-center mx-auto p-4'>
            <div className='flex-1'>
            <Link to='/' className=''>
                <img data-testid="headerImg" className='size-7 md:size-9 mt-1' src={Logo} alt="logo" />
            </Link>
            </div>
            <Link to='/' data-testid="headerHomeText" onClick={() => setBold(!bold)} className={`px-2 py-2 text-sm md:text-lg font-semibold rounded-full ${bold || isPath.pathname === "/" ? `bg-black text-white dark:bg-white dark:text-black` : `text-gray-900 dark:text-gray-100`}`}>Home</Link>
            <span className='mx-5 px-1 py-1 md:px-2 md:py-2 rounded-2xl border border-gray-600 bg-orange-300'>
                <span data-testid="headerFeature" className='text-sm mr-1 md:text-lg text-blue-700'>New</span>
                <span data-testid="headerFeature" className='text-sm md:text-lg'>check out <i className="bi bi-arrow-right"></i></span>
                <Link data-testid="headerJoke" to='/joke' className='underline text-sm md:text-lg text-blue-700'>Jokes</Link>
            </span>
            <span data-testid="headerButton" onClick={() => setDark(!dark)} className={`bi ${!dark ? `bi-brightness-low-fill` : `bi-moon-stars-fill text-white`} hover:cursor-pointer mt-1 md:mt-2 text-xl`}></span>
        </div>
    </nav>

  )
}
