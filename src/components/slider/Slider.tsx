import styles from "./slider.module.scss";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import ImgComp from "./ImgComp";
import MyImage from "../../data-models/MyImage";

const checkedIcon = <FiberManualRecordIcon key={nanoid()} />
interface SliderProps {
    images: MyImage[],
}

export default function Slider({ images }: SliderProps) {
    const [x, setX] = useState(0);
    // const [opacity, setOpacity] = useStateCallback(0);
    const [opacity, setOpacity] = useState(0);

    const [imageCount, setImageCount] = useState(0);


    useEffect(() => {
        setX(0);
        setImageCount(0);
        setOpacity(0);
    }, [images])

    useEffect(() => {
        // finish loading all images
        if (imageCount === images.length && images.length > 0) {
            setOpacity(1);
        }
    }, [imageCount, images.length])


    const handleOnLoad = () => {
        setImageCount(prev => {
            return prev + 1;
        })
    }


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
                        <div
                            style={{ opacity: opacity, transform: `translateX(${x}%)` }}
                            key={idx} className={styles['slide']}>
                            <ImgComp
                                className={styles['slide-img']}
                                onLoad={handleOnLoad}
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