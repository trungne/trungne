import styles from "./slider.module.scss";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";

import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import ImgComp from "./ImgComp";
import MyImage from "../portfolio/MyImage";
const checkedIcon = <FiberManualRecordIcon key={nanoid()} />
interface SliderProps {
    images: MyImage[],
}

export default function Slider({ images }: SliderProps) {
    const sliderArr = images.map((image, idx) => {
        return <ImgComp src={image.imgPath} alt={image.label} key={idx} />
    })
    const [x, setX] = useState(0);
    useEffect(() => {
        setX(0);
    }, [images])


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
            if (x === -100 * (sliderArr.length - 1)) {
                return 0;
            }
            return prev - 100;
        })
    }

    return (

        <div id="slider" className={styles['slider']}>
            <div className={styles['slider-indicators']}>
                {images.map((image, idx) => {
                    const currentIndex = -1 * x / 100;
                    if (idx === currentIndex) {
                        return checkedIcon;
                    }

                    return <FiberManualRecordOutlinedIcon key={image.imgPath} />
                })}
            </div>
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

            <IconButton aria-label="go left" className={`${styles['left']} ${styles['icon']}`} onClick={goLeft}>
                <ArrowLeftIcon />
            </IconButton>
            <IconButton aria-label="go right" className={`${styles['right']} ${styles['icon']}`} onClick={goRight}>
                <ArrowRightIcon />
            </IconButton>
        </div>
    )
}