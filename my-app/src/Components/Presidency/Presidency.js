import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Slider from "../../utiles/Slider.json";
import 'swiper/swiper.min.css';
import { sliderSettings } from "../../utiles/SliderSetting";

const Presidency = () =>{
    return(
        <div className="w-9/12 mx-auto pt-10 relative flex flex-col gap-4">
            <div className="flex flex-col">
               <span className="text-yellow-400 font-bold text-2xl">Best Choices</span> 
               <span className="text-blue-800 font-bold text-2xl">Popular Residencies</span>
            </div>
            {/* destructuring swiper */}
            <div>
            <Swiper {...sliderSettings}>
                <SliderButton />
                {
                    Slider.map((card,index) => {
                        return(
                            <SwiperSlide>
                                <div className="flex flex-col gap-2 hover:cursor-pointer  transition-all duration-500 ">
                                <img src={card.image} width={200} height={200}/>
                                <div>
                                    <span className="text-orange-300 text-3xl font-bold">$</span><span className="text-gray-400 font-bold text-3xl">{card.price}</span>
                                </div>
                                <div className="text-blue-800 text-2xl font-semibold">
                                    {card.name}
                                </div>
                                <div className="text-gray-400 break-words">
                                    {card.detail}
                                </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            </div>
        </div>

    );
}
export default Presidency;


const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="absolute top-[-4rem] right-0">
            <button onClick={() => swiper.slidePrev()} className="text-5xl font-extrabold text-orange-600">&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}