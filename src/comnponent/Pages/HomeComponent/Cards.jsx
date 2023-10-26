import React from 'react';
import './Cards.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'

const Cards = ({img,name, country}) => {
    return (
        <div className='shadow-lg cards rounded-md border'>
            <div className='absolute'>
                <img className=' h-[320px] w-[320px] rounded-t-md' src={img} alt="" />   
            </div>
            <div className='card-info flex gap-3 justify-center items-center rounded-tl-md'>
                <AiFillFacebook className='text-orange-400 rounded-lg'  size={40} />
                <AiFillLinkedin className='text-orange-400 rounded-lg'  size={40} />
                <FaInstagramSquare className='text-orange-400 rounded-lg'  size={40} />
            </div>
            <div className='bg-stone-900 text-center h-[80px]  flex justify-center items-center'>
                <div className='h-[70px] w-[310px] border '>
                    <h3 className='bg-stone-900 text-orange-400 md:font-Nijam text-xl'>{name}</h3>
                    <h5 className='text-white'>{country}</h5>
                </div>    
            </div>       
        </div>
    );
};

export default Cards;