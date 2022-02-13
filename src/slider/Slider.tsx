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

import useStateCallback from "../hooks/useStateCallBack";

const checkedIcon = <FiberManualRecordIcon key={nanoid()} />
interface SliderProps {
    images: MyImage[],
}

export default function Slider({ images }: SliderProps) {
    const [x, setX] = useState(0);
    const [opacity, setOpacity] = useStateCallback(0);

    useEffect(() => {
        setX(0);
        setOpacity(0);
    }, [images])

    const goLeft = () => {
        setX(prev => {
            if (x === 0) {
                return -100 * (images.length - 1);
            }

            return prev + 100;
        })
    }

    const goRight = () => {
        setX(prev => {
            if (x === -100 * (images.length - 1)) {
                return 0;
            }
            return prev - 100;
        })
    }

    return (
        <div
            id="slider"
            className={styles['slider']}>
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
                images.map((image, idx) => {
                    return (
                        <div onClick={goRight}
                            style={{ opacity: opacity, transform: `translateX(${x}%)` }}
                            key={idx} className={styles['slide']}>
                            <ImgComp
                                onLoad={() => {
                                    setOpacity(1);
                                }} 
                                src={image.imgPath} alt={image.label} key={idx} />
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


// useEffect(() => {
  //   anime({
  //     targets: "#blob1",

  //     translateX: function() {
  //       return anime.random(0, 270);
  //     },
  //     translateY: function() {
  //       return anime.random(0, 270);
  //     },
  //     direction: 'alternate',

  //     easing: 'linear',
  //     loop: true,
  //     duration: 300,
  //   });
  //   anime({
  //     targets: "#blob2",

  //     translateX: function() {
  //       return anime.random(0, 600);
  //     },
  //     translateY: function() {
  //       return anime.random(0, 600);
  //     },
  //     direction: 'alternate',
  //     easing: 'linear',
  //     loop: true,
  //     duration: 3000,
  //   });
  // }, [])