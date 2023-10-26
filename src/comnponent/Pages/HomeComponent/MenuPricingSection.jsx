import { useEffect, useState } from "react";
import {BsArrowRight} from 'react-icons/bs'
const MenuPricingSection = () => {
    const [allData, setAllData] =useState([]);
    const [selectedData, setSelectedData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setAllData(data)
            const filterData =data.filter(currData => currData.category === 'birth')
            setSelectedData(filterData)   
        })
    },[])
    const changeHandle =(category)=>{
        const updateData =allData.filter(currData => currData.category === category)
        setSelectedData(updateData)
    }

    return (
        <div>
            <div className='container mx-auto '>
                <h3 className='text-center text-orange-400 font-Nijam1 md:text-4xl'>Menu & Pricing</h3>
                <h1 className='font-bold font-Nijam md:text-[50px]  text-center my-2 text-black'>EXPLORE OUR CAKE</h1>
                <div className='flex justify-center mb-10'>
                    <div className='bg-orange-400 w-[50px] h-[8px] flex flex-col justify-center items-center '>
                        <div className='bg-orange-400 w-[150px] h-[2px]'></div>
                    </div>   
                </div>
                <div className="flex justify-center">
                  <div className="bg-stone-900 w-[300px] p-2">
                    <div className="flex justify-between p-2 text-white border">
                        <button className="px-2 duration-300 rounded-md hover:bg-orange-400" onClick={()=>changeHandle('birth')}>BIRTHDAY</button>
                        <button className="px-2 duration-300 rounded-md hover:bg-orange-400" onClick={()=>changeHandle('wed')}>WEDDING</button>
                        <button className="px-2 duration-300 rounded-md hover:bg-orange-400" onClick={()=>changeHandle('cus')}>CUSTOM</button>
                    </div>
                  </div>   
                </div>
                <div className="grid gap-5 my-10 md:grid-cols-2">
                    {
                        selectedData.map((Data) => {
                            const {img,title, description,price} =Data;
                            return(
                            <div className="flex items-center bg-orange-100 ">
                                <div>
                                    <img className='w-[200px] ' src={img} alt="" />
                                    <div className="bg-stone-900 text-orange-400 p-2 text-center font-bold">
                                        <h4>{price}</h4>
                                    </div>
                                </div>
                                <div className='p-2 mx-2 border border-white rounded-md'>
                                    <h3 className='font-Nijam '>{title}</h3>
                                    <p className='text-gray-600 text-[15px] '>{description}</p>
                                </div>
                            </div>
                            )
                        })       
                    }
                </div>
            </div>  
            <div className='md:bg-[url(src/img/service.jpg)]  bg-cover w-full mt-36'>
                    <div className= " md:bg-black opacity-95  ">
                        <div className="container mx-auto relative -top-[70px] flex flex-col gap-10">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
                                <div className="bg-orange-400 h-[200px] flex flex-col items-center  p-2">   
                                    <div className="border-white border w-full h-[190px] flex flex-col items-center justify-center text-center">
                                        <h3 className="font-Nijam text-xl text-black">BIRTHDAY CAKE </h3>
                                        <p className="text-white my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iste, minima voluptatibus ipsa natus vel!</p>
                                        <div className="flex items-center gap-2">
                                            <button className="font-Nijam2 flex text-black">READ MORE  </button>
                                            <BsArrowRight />
                                        </div>         
                                    </div>
                                </div>
                                <div className="bg-orange-400 h-[200px] flex flex-col items-center  p-2">   
                                    <div className="border-white border w-full h-[190px] flex flex-col items-center justify-center text-center">
                                        <h3 className="font-Nijam text-xl text-black">WEDDING CAKE </h3>
                                        <p className="text-white my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iste, minima voluptatibus ipsa natus vel!</p>
                                        <div className="flex items-center gap-2">
                                            <button className="font-Nijam2 flex text-black">READ MORE  </button>
                                            <BsArrowRight />
                                        </div>         
                                    </div>
                                </div>
                                <div className="bg-orange-400 h-[200px] flex flex-col items-center  p-2">   
                                    <div className="border-white border w-full h-[190px] flex flex-col items-center justify-center text-center">
                                        <h3 className="font-Nijam text-xl text-black">CUSTOM CAKE </h3>
                                        <p className="text-white my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia iste, minima voluptatibus ipsa natus vel!</p>
                                        <div className="flex items-center gap-2">
                                            <button className="font-Nijam2 flex text-black">READ MORE  </button>
                                            <BsArrowRight />
                                        </div>         
                                    </div>
                                </div>                            
                            </div>
                            <div className="flex flex-col items-center ">
                                <h2 className="font-Nijam md:text-white lg:text-3xl text-xl">30% DISCOUNT FOR THIS SUMMER</h2>
                                <div className="w-[100px] mt-3 bg-orange-400 p-1">
                                    <button className="text-[14px] p-1 border text-white  font-semibold">READ MORE </button>
                                </div>
                             </div>  
                        </div>
                    </div>
            </div>          
        </div>
    );
};

export default MenuPricingSection;