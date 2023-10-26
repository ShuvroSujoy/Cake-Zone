import React from 'react';
import {BsFillHeartPulseFill} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import {BsFillCupHotFill} from 'react-icons/bs'
const AboutSection = () => {
    return (
        <div>  
            <div className='container mx-auto'>
                <h3 className='font-Nijam1  md:text-4xl text-orange-400 text-center'>About Us</h3>
                <h1 className='font-bold font-Nijam md:text-[50px]  text-center my-2 text-black'>WELCOME TO CAKEZONE</h1>
                <div className='flex justify-center mb-10'>
                    <div className='bg-orange-400 w-[50px] h-[8px] flex flex-col justify-center items-center '>
                        <div className='bg-orange-400 w-[150px] h-[2px]'></div>
                    </div>   
                </div>
                <div className='flex gap-10 flex-col lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <img src="src/img/about.jpg" alt="" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='font-bold font-Nijam md:text-[25px] leading-8 text-black'>Tempor erat eliter rebum clite. Diam dolor diam ipsum erat lorem sed stet labore lorem sit Clita duo.</h3>
                        <p className='text-gray-600 py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eum nostrum repellendus sit dolor fuga nemo quidem suscipit hic ea. Aspernatur ea possimus in laudantium et dolores saepe aliquid nemo.</p>
                        <div className='flex justify-between gap-10 mt-10'>
                            <div className=' w-[300px]'>
                                <div className=' w-[100px] h-[100px] bg-orange-400 flex justify-center items-center'>
                                    <div className='w-[80px] h-[80px] border flex justify-center items-center'>
                                        <BsFillHeartPulseFill className='text-white' size={30}/>
                                    </div>
                                </div>
                                <h3 className='font-bold font-Nijam md:text-[25px] leading-8 text-black mt-5'>100% HEALTHY</h3>
                                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat quam quos quae cumque eveniet.</p>
                            </div>

                            <div className=' w-[300px]'>
                                <div className=' w-[100px] h-[100px] bg-orange-400 flex justify-center items-center'>
                                    <div className='w-[80px] h-[80px] border flex justify-center items-center'>
                                        <FaAward className='text-white' size={30}/>
                                    </div>
                                </div>
                                <h3 className='font-bold font-Nijam md:text-[25px] leading-8 text-black mt-5'>AWARD WINNING</h3>
                                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat quam quos quae cumque eveniet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about cart start */}
            <div className=' bg-[url(src/img/bg.jpg)] h-[300px] '>
                <div className=' bg-black h-[300px] bg-opacity-80 '>
                    <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 justify-between items-center h-[300px]'>
                    <div className='flex gap-3 '>
                        <div className=' w-[60px] h-[60px] bg-orange-400 flex justify-center items-center'>
                            <div className='w-[45px] h-[45px] border flex justify-center items-center'>
                                <AiFillStar className='text-white' size={20}/>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold font-Nijam md:text-base text-orange-400 mb-2'>OUR EXPERIENCE</h4>
                            <h2 className='font-bold font-Nijam md:text-5xl text-2xl text-white'>12345</h2>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div className=' w-[60px] h-[60px] bg-orange-400 flex justify-center items-center'>
                            <div className='w-[45px] h-[45px] border flex justify-center items-center'>
                                <IoIosPeople className='text-white' size={20}/>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold font-Nijam md:text-base text-orange-400 mb-2'>CAKE SPECIALISY</h4>
                            <h2 className='font-bold font-Nijam md:text-5xl text-2xl text-white'>12345</h2>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div className=' w-[60px] h-[60px] bg-orange-400 flex justify-center items-center'>
                            <div className='w-[45px] h-[45px] border flex justify-center items-center'>
                                <TiTick className='text-white' size={20}/>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold font-Nijam md:text-base text-orange-400 mb-2'>COMPLETE PROJECT</h4>
                            <h2 className='font-bold font-Nijam md:text-5xl text-2xl text-white'>12345</h2>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div className=' w-[60px] h-[60px] bg-orange-400 flex justify-center items-center'>
                            <div className='w-[45px] h-[45px] border flex justify-center items-center'>
                                <BsFillCupHotFill className='text-white' size={20}/>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold font-Nijam md:text-base text-orange-400 mb-2'>HAPPY CLIENTS</h4>
                            <h2 className='font-bold font-Nijam md:text-5xl text-2xl text-white'>12345</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* about cart end  */}
        </div>
    );
};

export default AboutSection;