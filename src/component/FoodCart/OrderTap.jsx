import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Grid } from 'swiper/modules';
import FoodCart from "./FoodCart";


const OrderTap = ({ item }) => {
    
    return (

        <div className="w-full">
            <Swiper
                modules={[Grid, Pagination, Navigation]}
                slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: "row", // Important to fill slides row-wise
                }}
                spaceBetween={20}
                pagination={{ clickable: true, el: ".custom-pagination" }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                slidesPerGroup={6} // <-- Move 6 slides at a time
                className="pb-10 w-full"
            >
                {item.map((menuitem, i) => (
                    <SwiperSlide key={i}>
                        <FoodCart item={menuitem} />
                    </SwiperSlide>
                ))}


            </Swiper>
            <div className="flex  items-center mt-4 gap-4">
                <button className="swiper-button-prev-custom bg-gray-200 border-2 border-black text-3xl font-extrabold  px-2 pb-1  rounded-full ">
                    ←
                </button>
                <button className="swiper-button-next-custom bg-yellow-500 border-2 border-black text-3xl font-extrabold  text-white px-2 pb-1  rounded-full ">
                    →
                </button>

                <div className="custom-pagination flex items-center gap-2">
                    {/* Swiper auto-renders bullet spans here */}
                </div>
                <style>

                </style>
            </div>
        </div>

    );
};

export default OrderTap;