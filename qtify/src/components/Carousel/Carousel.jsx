import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";
import { SwiperSlide, useSwiper, Swiper } from "swiper/react";
import 'swiper/swiper-bundle.css'; 
import 'swiper/swiper.min.css'; 
import {Navigation} from "swiper";


const Controls = ({data})=>{
    const swiper = useSwiper();

    useEffect(()=> {
        swiper.slideTo(0);
    }, [data]);

    return <></>;
};

function Carousel({data, renderComponent}){
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{padding: "0px 20px"}}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove
            >
                <Controls data={data} />
                <div>
                    <CarouselLeft />
                    <CarouselRight />
                </div>
                {data.map((ele)=>(
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Carousel;