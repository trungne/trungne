import { useState } from "react";
import styles from "./slider.module.scss";

import ImgComp from "./ImgComp";
import MyImage from "../portfolio/MyImage";
interface SliderProps {
    images: MyImage[],
}

export default function Slider({images} : SliderProps) {
    const sliderArr = images.map((image, idx) => {
        return <ImgComp src={image.imgPath} alt={image.label} key={idx} />
    })
    const [x, setX] = useState(0);


    const goLeft = () => {
        setX(prev => {
            if (x === 0) {
                return -100 * (sliderArr.length - 1);
            }
            
            return prev + 100;
        })
    }

    const goRight = () => {
        setX(prev => {
            if (x === -100 * (sliderArr.length - 1)){
                return 0;
            }
            return prev - 100;
        })
    }

    return (
        <div className={styles['slider']}>
            {
                sliderArr.map((item, idx) => {
                    return (
                        <div
                            style={{ transform: `translateX(${x}%)` }}
                            key={idx} className={styles['slide']}>
                            {item}
                        </div>
                    )
                })
            }
            <button className={styles['left']} onClick={goLeft}>left</button>
            <button className={styles['right']} onClick={goRight}>right</button>
        </div>
    )
}