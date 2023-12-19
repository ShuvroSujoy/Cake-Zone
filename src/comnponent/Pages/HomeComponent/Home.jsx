import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../assets/animation_lo227hey.json";
import AboutSection from './AboutSection';
import MenuPricingSection from './MenuPricingSection';
import TemMember from './TemMember';
import SpicalKp from './SpicalKp';
import SliderSick from './SliderSick';

const Home = () => {
    return (
        <div>
            <main>
                {/* hero section start  */}
                <section className='flex items-center bg-[url(src/img/hero.jpg)] md:h-[500px] h-[200px] bg-no-repeat  bg-cover  '>
                    <div className='container mx-auto  '>
                        <h4 className='font-Nijam1  md:text-3xl text-orange-400' >Super Crispy</h4>
                        <h1 className='font-bold font-Nijam md:text-[60px] py-2 text-white'>CAKEZONE</h1>
                        <h2 className='font-bold font-Nijam md:text-[40px] text-white'>THE BEST CAKE IN LODON</h2>
                        <div className='font-Nijam flex items-center'>
                            <div className=' bg-orange-400 p-2  md:w-[150px] w-[100px] md:h-[50px] h-[40px]'>
                                <div className='flex items-center border border-white justify-center md:py-1'>
                                    <button className='text-base font-bold text-white '>Read More</button>
                                </div> 
                            </div>
                            <div className='flex items-center'>
                                <Lottie className='md:w-[150px] w-[100px]' animationData={groovyWalkAnimation}  />
                                <h3 className='md:text-xl font-bold text-white '>Play Video</h3>
                            </div>   
                        </div>
                    </div>
                </section> 
                
                <section className='my-32'>
                    <AboutSection/>
                </section>    
               
                <section className='my-32'>
                    <MenuPricingSection/>
                </section>    

                <section className='my-32'>
                    <TemMember />
                </section>
                <section className='my-32'>
                    <SpicalKp/>
                </section>
                
                <section className='my-32'>
                    <SliderSick/>
                </section>
                        
            </main>      
        </div>
    );
};

export default Home;