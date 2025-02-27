import React, { useState } from "react";
import styles from "./CarouselRight.module.css";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";


export default function CarouselRight() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);


    swiper.on("slideChange", function () {
        setIsEnd(swiper.isEnd);
        console.log("Current Slide Index:", swiper.activeIndex);
        console.log("Is End:", swiper.isEnd);
    });


    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=> swiper.slideNext()} /> }
        </div>
    );
};