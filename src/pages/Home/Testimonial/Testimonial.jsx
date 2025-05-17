import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import icon from "../../../assets/quote-left 1.png"

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20 ">
            <SectionTitle
                heading="TESTIMONIALS"
                subheading="What Our Clients Say"
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-10/12 m-auto">
                    {

                        reviews.map(review => <SwiperSlide>
                            <div className="m-24  flex flex-col items-center space-y-7">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img src={icon} alt="" />
                                <p>{review.details}</p>
                                <h3 className="text-3xl uppercase pt-3 text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;