import React from 'react';
import {FaCakeCandles} from "react-icons/fa6"
import {FaLocationDot} from "react-icons/fa6"
import {BiLogoTwitter} from "react-icons/bi"
import {FaFacebookF} from "react-icons/fa6"
import {BiLogoLinkedin} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import {AiOutlineArrowUp} from "react-icons/ai"



const Footer = () => {
    return (
        <div >
            <div className='bg-[url(src/img/bg.jpg)] w-screen  absolute 
            '> 
            <div className='bg-stone-900 lg:h-[300px] opacity-80  py-10 lg:py-0 '>
                <div className='container mx-auto '>
                    <div className='lg:flex gap-10 '>
                        {/*  */}
                        <div className='w-[330px]  h-[330px] bg-orange-400 hidden lg:flex lg:justify-center items-center '>
                            <div className='w-[305px] h-[315px] border p-2 text-center text-white flex flex-col justify-center items-center'>
                                <div className='flex items-center gap-2 '>
                                    <FaCakeCandles className='text-black' size={30}/>
                                    <h1 className='text-[30px] font-bold uppercase  text-white '>Cakezone</h1>
                                </div>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, facilis? Est provident rem delectus nesciunt enim, error quae dicta, veritatis, debitis exercitationem vel in eius ullam fugit repudiandae iure ipsum ratione placeat cum reprehenderit nemo.</p>
                            </div>
                        </div>
                        {/* GET IN TOUCH */}
                        <div className=' text-white grid lg:grid-cols-3 md:grid-cols-2 mt-10 '>
                            <div>
                                <h2 className='text-orange-400 font font-Nijam text-xl'>GET IN TOUCH</h2>
                                <div className='mt-5'>
                                    <p className='flex gap-1 items-center'><span><FaLocationDot size={20} className='text-orange-400'/></span><span>123 Street, New York, USA</span>
                                    </p>

                                    <p className='flex  gap-1 my-3 items-center'><span><FaLocationDot size={20} className='text-orange-400'/></span><span>info@example.com</span>
                                    </p>
                                    <p className='flex  gap-1 items-center'><span><FaLocationDot size={20} className='text-orange-400'/></span><span>+01234567890</span></p>          
                                </div>
                                <div className='mt-5 flex gap-2'>
                                    <div className='w-[40px] h-[40px] bg-orange-400 flex justify-center items-center'>
                                        <BiLogoTwitter className='border' size={30}/>
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-orange-400 flex justify-center items-center'>
                                        <FaFacebookF className='border' size={30}/>
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-orange-400 flex justify-center items-center'>
                                        <BiLogoLinkedin className='border' size={30}/>
                                    </div>
                                </div>

                            </div>
                        {/* Quick Link  */}
                            <div>
                                <h2 className='text-orange-400 font font-Nijam text-xl'>QUICK LINKS</h2>
                                <div className='mt-5'>
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>Home</span>
                                    </p>         
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>About Us</span>
                                    </p>         
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>Our Services</span>
                                    </p>         
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>Meet The Team</span>
                                    </p>         
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>Latest Blog</span>
                                    </p>         
                                    <p className='flex gap-1 items-center mb-1'><span><BsArrowRight size={20} className='text-orange-400'/></span><span>Contact Us</span>
                                    </p>         
                                </div>
                            </div>
                            {/* NEWS LETTER   */}
                            <div >
                                <h2 className='text-orange-400 font font-Nijam text-xl mb-5'>QUICK LINKS</h2>
                                <p className='w-[250px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at?</p>
                                <div className='mt-5'>
                                    <input className='bg-white ps-4 py-2' type="email" placeholder='Your email' />
                                    <button className='border py-2 bg-orange-400 text-white font-semibold px-3'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='bg-black h-[60px] text-center text-white flex items-center justify-center gap-4'>
                <p className='md:text-base text-[10px] '>&copy; Your Site Name. All Rights Reserved. Designed by <u>HTML Codex</u></p>
                <div className='h-[60px] bg-orange-400 w-[60px] lg:relative -right-[300px] flex justify-center items-center'>
                   <AiOutlineArrowUp className='border ' size={35} /> 
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;