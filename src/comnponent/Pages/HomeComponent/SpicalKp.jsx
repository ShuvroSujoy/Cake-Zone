import React from 'react';
const SpicalKp = () => {
    return (
        <div className=' bg-[url(src/img/offer.jpg)] w-full  bg-cover bg-no-repeat'>
            <div className='bg-black opacity-95  flex justify-center items-center py-20'>
                <div className='container mx-auto'>
                    <h3 className='text-center text-orange-400 font-Nijam1 md:text-4xl'>Special Kombo Pack</h3>
                    <h1 className='font-bold font-Nijam md:text-[50px]  text-center my-2 text-white uppercase'>Super Crispy Cakes</h1>
                    <div className='flex justify-center mb-10'>
                        <div className='bg-orange-400 w-[50px] h-[8px] flex flex-col justify-center items-center '>
                            <div className='bg-orange-400 w-[150px] h-[2px]'></div>
                        </div>   
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='mb-10 text-white text-center w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, optio suscipit! Dolorum consectetur doloribus labore dicta! Officiis ullam, maxime reprehenderit ipsa eos architecto dolorum nobis, doloremque harum soluta odit optio?Lorem ipsum dolor sit amet.</p>
                        <div className='flex justify-center ite gap-5 '>
                            <div className='bg-orange-400 p-2 w-[135px]'>
                                <button className='text-white font-semibold border px-5'>Shop Now</button>
                            </div>
                            <button className='text-white font-semibold border px-5'>Shop Now</button>      
                        </div>   
                    </div>          
                    
                </div>
            </div>
        </div>
    );
};

export default SpicalKp;