import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import icon from "../../../assets/quote-left 1.png";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-snowy-one.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="lg:my-20 my-5 ">
      <SectionTitle
        heading="TESTIMONIALS"
        subheading="What Our Clients Say"
      ></SectionTitle>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper lg:max-w-10/12 m-auto"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <div className="lg:m-24 m-10 text-center  flex flex-col items-center space-y-7">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img src={icon} alt="" />
                <p>{review.details}</p>
                <h3 className="text-3xl uppercase pt-3 text-orange-400">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
