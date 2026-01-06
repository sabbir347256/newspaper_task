import React, { useState } from 'react';
import { CgLogIn } from 'react-icons/cg';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import logo from '../../../image/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navitem = [
        { item: 'জাতীয়', link: '/জাতীয়' },
        { item: 'আন্তর্জাতিক', link: '/আন্তর্জাতিক' },
        { item: 'তথ্য প্রযুক্তি', link: '/তথ্য প্রযুক্তি' },
        { item: 'শিক্ষা', link: '/শিক্ষা' },
        { item: 'ব্যবসা', link: '/ব্যবসা' },
        { item: 'পরিবেশ', link: '/পরিবেশ' },
        { item: 'খেলাধুলা', link: '/খেলাধুলা' },
    ];
    return (
        <div className="w-full bg-white shadow-md relative border-b border-gray-400 px-4 md:px-0 z-50">
            <div className="flex items-center justify-between  py-4 max-w-7xl mx-auto">
                <NavLink to='/'>
                    <div>
                        <img className='h-10' src={logo} alt="" />
                    </div>
                </NavLink>

                <div className="hidden md:flex gap-8">
                    <NavLink to='/' className="relative cursor-pointer text-xl mt-3 font-bold text-gray-700 transition-all duration-300 hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full">
                        হোম
                    </NavLink>
                    {navitem.map((nav, index) => (
                        <NavLink
                            to={`/categorynews/${nav?.link}`}
                            key={index}
                            className="relative cursor-pointer text-xl mt-3 font-bold text-gray-700 transition-all duration-300 hover:text-red-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {nav.item}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6 text-lg text-gray-700 border border-gray-400 mt-4">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 border-x border-gray-400 px-2">
                        <FaSearch />
                        <span>খুজুন</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
                        <GiWorld />
                        <span>Eng</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 border-x border-gray-400 px-2">
                        <CgLogIn />
                        <span>Login</span>
                    </div>
                </div>

                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        {navitem.map((nav, index) => (
                            <NavLink to={`/categorynews/${nav?.link}`}
                                key={index}
                                className="text-lg font-medium text-gray-700 cursor-pointer hover:text-red-600 transition">
                                {nav.item}
                            </NavLink>
                        ))}

                        <div className="border-t pt-4 flex gap-4">
                            <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition">
                                <FaSearch />
                                <span>খুজুন</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition">
                                <GiWorld />
                                <span>Eng</span>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer hover:text-red-600">
                                <CgLogIn />
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;