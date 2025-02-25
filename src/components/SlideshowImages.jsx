import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SlideshowImages.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context("../assets/events", false, /\.(png|jpe?g|svg)$/));

const SlideshowImages = () => {
    return (
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={10} slidesPerView={3} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000 }} loop className="event-slideshow">
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`Event ${index + 1}`} className="slideshow-image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SlideshowImages;
