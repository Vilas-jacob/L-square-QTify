import React, {useState} from "react";
import { useSwiper } from 'swiper/react';
import styles from "./CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";

export default function CarouselLeft() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    swiper.on("slideChange", function() {
        setIsBeginning(swiper.isBeginning);
    });

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} /> }
        </div>
    );

};