import React, { useState } from 'react';
import {TfiEmail} from "react-icons/tfi"
import {BsPhoneVibrate} from "react-icons/bs"
import {FaCakeCandles} from "react-icons/fa6"
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] =useState(false);
    return (
        <div className='sticky top-0 z-10'>
            <div className ='lg:bg-orange-100 h-20 lg:flex hidden'>
                <div className='hidden lg:flex md:justify-between items-center container mx-auto '>
                    <div className='flex items-center lg:gap-4 gap-1'>
                        <TfiEmail size={40}  color='orange'/>
                        <div >
                            <h3 className='font-bold text-[20px]'>Email Us</h3>
                            <p className='text-[15px]'>info@example.com</p>
                        </div>
                    </div>
                    <div className=' bg-orange-400 p-2 '>
                        <div className='flex gap-x-3 items-center  border border-white  px-28'>
                            <FaCakeCandles size={40}/>
                            <h1 className='text-[40px] font-bold uppercase  text-white '>Cakezone</h1>
                        </div>
                        
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsPhoneVibrate size={40} color='orange'/>
                        <div>
                            <h3 className='font-bold text-[20px]'>Call Us</h3>
                            <p className='text-[15px]'>+0123456789</p>
                        </div>
                    </div>
                </div>
            </div>
                 
            <nav className=' w-screen md:h-20 h-10 bg-stone-900 flex lg:justify-center items-center'>
                <div className='lg:hidden ' onClick={()=>setOpen(!open)}>
                    <span>{open? <XMarkIcon className="md:h-10 md:w-10 h-8 w-8 text-white" />: <Bars3Icon className="md:h-10 md:w-10 w-8 h-8 text-white" />}</span>

                </div>
                <ul className={`uppercase bg-opacity-80 bg-stone-900  lg:static duration-700 w-full text-center   absolute lg:flex  gap-y-5 font-Nijam mr-10 justify-center text-lg text-white ${open? 'md:top-20 : top-10' : '-top-80'} `}>
                    <li className='my-5 ms-8 lg:ms-0 hover:bg-gray-950 hover:text-orange-400 px-5 py-1 hover:rounded-lg mr-10 font-bold text-oswald duration-300'><Link to='/'>Home</Link></li>     
                    <li className='my-5 ms-8 lg:ms-0 hover:bg-gray-950 hover:text-orange-400 px-5 py-1 hover:rounded-lg mr-10 font-bold text-oswald duration-300'><Link to='/aboutUs'>About Us</Link></li>     
                    <li className='my-5 ms-8 lg:ms-0 hover:bg-gray-950 hover:text-orange-400 px-5 py-1 hover:rounded-lg mr-10 font-bold text-oswald duration-300'><Link to='/menu&pricing'>Menu & Pricing</Link></li>     
                    <li className='my-5 ms-8 lg:ms-0 hover:bg-gray-950 hover:text-orange-400 px-5 py-1 hover:rounded-lg mr-10 font-bold text-oswald duration-300'><Link to='/masterChef'>Master chef</Link></li>     
                    <li className='my-5 ms-8 lg:ms-0 hover:bg-gray-950 hover:text-orange-400 px-5 py-1 hover:rounded-lg mr-10 font-bold text-oswald duration-300'><Link to='/contact'>Contact Us</Link></li>   
                </ul>     
            </nav>       
        </div>
    );
};

export default Header;