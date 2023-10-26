import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const SliderSick = () => {
    const sliderRef = useRef(null);
    const goToNext = () => {
        sliderRef.current.slickNext();
      };
    
      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: "center",
       
 
      };
    return (
        <div className='container mx-auto '>
             <h3 className='text-center text-orange-400 font-Nijam1 md:text-4xl'>Testimonial</h3>
                <h1 className='font-bold font-Nijam md:text-[50px]  text-center my-2 text-black'>OUR CLIENTS SAY!!!</h1>
                <div className='flex justify-center mb-10'>
                    <div className='bg-orange-400 w-[50px] h-[8px] flex flex-col justify-center items-center '>
                        <div className='bg-orange-400 w-[150px] h-[2px]'></div>
                    </div>   
                </div>
            <div className="carousel-container  border">
                <Slider {...settings} className=''>
                    <div className='bg-stone-800 p-2 mt-10 '>
                        <div className='border p-3 flex flex-col gap-5'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='h-16 w-16'>
                                    <img src="src/img/testimonial-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4 className='uppercase text-orange-400 font-bold text-2xl'>Client name</h4>
                                    <h6 className='text-white text-base font-normal'>Profession</h6>
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-base font-normal w-80'>Dolor et labore,stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-stone-800 p-2 mt-10'>
                        <div className='border p-3 flex flex-col gap-5'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='h-16 w-16'>
                                    <img src="src/img/testimonial-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4 className='uppercase text-orange-400 font-bold text-2xl'>Client name</h4>
                                    <h6 className='text-white text-base font-normal'>Profession</h6>
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-base font-normal w-80'>Dolor et labore,stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-stone-800 p-2 mt-10 w-[400px]'>
                        <div className='border p-3 flex flex-col gap-5'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='h-16 w-16'>
                                    <img src="src/img/testimonial-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4 className='uppercase text-orange-400 font-bold text-2xl'>Client name</h4>
                                    <h6 className='text-white text-base font-normal'>Profession</h6>
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-base font-normal w-80'>Dolor et labore,stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-stone-800 p-2 mt-10 w-[400px]'>
                        <div className='border p-3 flex flex-col gap-5'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='h-16 w-16'>
                                    <img src="src/img/testimonial-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4 className='uppercase text-orange-400 font-bold text-2xl'>Client name</h4>
                                    <h6 className='text-white text-base font-normal'>Profession</h6>
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-base font-normal w-80'>Dolor et labore,stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-stone-800 p-2 mt-10 w-[400px]'>
                        <div className='border p-3 flex flex-col gap-5'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='h-16 w-16'>
                                    <img src="src/img/testimonial-1.jpg" alt="" />
                                </div>
                                <div>
                                    <h4 className='uppercase text-orange-400 font-bold text-2xl'>Client name</h4>
                                    <h6 className='text-white text-base font-normal'>Profession</h6>
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-base font-normal w-80'>Dolor et labore,stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam </p>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
                <div className="custom-buttons flex justify-between ">
                    <button onClick={goToPrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={goToNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default SliderSick;