import React from 'react';
import Cards from './Cards';
import card1 from '../../../img/team-1.jpg'
import card2 from '../../../img/nijam1.jpg'
import card3 from '../../../img/team-3.jpg'
const TemMember = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h3 className='text-center text-orange-400 font-Nijam1 md:text-4xl'>Team Members</h3>
                <h1 className='font-bold font-Nijam md:text-[50px]  text-center my-2 text-black'>OUR MASTER CHEFS</h1>
                <div className='flex justify-center mb-10'>
                    <div className='bg-orange-400 w-[50px] h-[8px] flex flex-col justify-center items-center '>
                        <div className='bg-orange-400 w-[150px] h-[2px]'></div>
                    </div>   
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <Cards img={card1} country='American' name ='Raymond' />
                    <Cards img={card2} country='Bangladeshi' name ='Md: Nijam Hossen' />
                    <Cards img={card3} country='Brizal' name ='Monalisa' />
                </div>
                
            </div>
        </div>
    );
};

export default TemMember;