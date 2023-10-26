import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../assets/assets';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    const [menu, showMenu] = useState(false);
    const openDiv = () => { showMenu(!menu); }
    const closeNav = () => { showMenu(false); }

    return (
        <div className='header bg-card sm:py-8 py-4 relative'>
            <div className="container px-3 mx-auto">
                <nav className="border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between mx-auto">
                        <div className='main-heading text-center sm:block hidden'>
                            <Link to="/">
                                <h1 className='text-white xl:text-30 text-26 xl:leading-36 leading-30 font-bold user-select-none'>Student Academic Analysis</h1>
                            </Link>
                        </div>
                        <div className='main-heading text-center sm:hidden block'>
                            <Link to="/">
                                <h1 className='text-white xl:text-30 text-26 xl:leading-36 leading-30 font-bold'>SAA</h1>
                            </Link>
                        </div>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center text-sm text-white lg:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false" onClick={openDiv}>
                            <img className='w-24 h-24' alt="" src={Images.bars} />
                        </button>
                        <div className={`${menu ? "block" : "hidden"} lg:block md:w-auto lg:static absolute top-full left-3 right-3 `} id="navbar-default">
                            <ul className='text-white flex flex-col p-4 lg:p-0 border border-gray-100 rounded-lg bg-card lg:flex-row xl:space-x-20 lg:space-x-10 space-x-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700'>
                                <li className='lg:mb-0 mb-2' onClick={closeNav}><Link className={`hover:text-lightPurple text-16 ${location.pathname === "/student-records" ? "text-lightPurple" : ""}`} to="/student-records">Student Records</Link></li>
                                <li className='lg:mb-0 mb-2' onClick={closeNav}><Link className={`hover:text-lightPurple text-16 ${location.pathname === "/subject-score" ? "text-lightPurple" : ""}`} to="/subject-score">Subject Score Analysis</Link></li>
                                <li className='' onClick={closeNav}><Link className={`hover:text-lightPurple text-16 ${location.pathname === "/generate-analysis" ? "text-lightPurple" : ""}`} to="/generate-analysis">Generate Student Analysis </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;